from decimal import Decimal
from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
from rest_framework.reverse import reverse as api_reverse

class AccountManager(BaseUserManager):
    def create_user(self,email,username,password=None):
        if not email:
            raise ValueError("Users Must Have Emails")

        if not username:
            raise ValueError("Users Must Have Username")

        user = self.model(email=self.normalize_email(email),username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user 

    def create_superuser(self,email,username,password):
        user = self.create_user(  
                            email=self.normalize_email(email),
                            password=password, 
                            username=username,
                            )
        user.is_admin=True
        user.is_staff=True 
        user.is_superuser = True 
        user.save(using=self._db)
        return user 


class Account(AbstractBaseUser):
    email       = models.EmailField(verbose_name="email",max_length=60,unique=True)
    username    = models.CharField(max_length=200,unique=True)
    date_joined = models.DateTimeField(verbose_name="date joined",auto_now_add=True)
    last_login  = models.DateTimeField(verbose_name="last login",auto_now_add=True)
    is_active   = models.BooleanField(default=True)
    is_admin    = models.BooleanField(default=False)
    is_staff    = models.BooleanField(default=False)
    is_superuser= models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    objects = AccountManager()

    def __str__(self):
        return self.email

    def has_perm(self,perm,obj=None):
        return self.is_admin

    def has_module_perms(self,app_label):
        return True

class Appartement(models.Model):
    area        = models.CharField(max_length=5,default='F2')
    bathroom    = models.IntegerField()
    balcony     = models.IntegerField()
    loggia      = models.IntegerField()
    init_price  = models.DecimalField(max_digits=19, decimal_places=2,default=Decimal('0.00'))
    quantity    = models.IntegerField()
    plan        = models.ImageField(upload_to='plans',default='plans/f2.jpeg')
    state       = models.CharField(max_length=10,default='disponible')

    def __str__(self):
        return str(self.id)+". "+self.area

    def get_api_url(self,request=None):
        return api_reverse("appartement",kwargs={'pk':self.pk},request=request)


    
class BuyingForm(models.Model):
    client      = models.ForeignKey(Account,on_delete=models.CASCADE,blank=True)
    fullname    = models.CharField(default='',max_length=50)
    birthday    = models.DateField()
    birthplace  = models.CharField(default='',max_length=255)
    adress      = models.CharField(default='',max_length=255)
    email       = models.EmailField(max_length=60,unique=True)
    phoneNumber = models.CharField(default='0',max_length=20)
    identity    = models.ImageField(upload_to='identities',default='')
    appartement = models.ForeignKey(Appartement,on_delete=models.CASCADE)
    furniture   = models.CharField(default='Non Meuble',max_length=50)
    description = models.TextField(default='write your description',blank=True,null=True)
    floor       = models.IntegerField(default=1)
    state       = models.CharField(default='non confirme',max_length=15,blank=True)
    bank_receipt= models.FileField(upload_to='bank_receipts',blank=True)
    timestamp   = models.DateTimeField(auto_now_add=True,null=True )


    def __str__(self):
        return str(self.id)+". "+self.fullname


    def get_api_url(self,request=None):
        return api_reverse("Form",kwargs={'pk':self.pk},request=request)

class Review(models.Model):
    user    = models.ForeignKey(Account,on_delete=models.CASCADE)
    note    = models.IntegerField(blank=True,null=True)
    content = models.TextField(blank=True,null=True) 




