from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer

from allauth.account import app_settings as allauth_settings
from allauth.utils import email_address_exists
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from appartement.models import *


class AccountSerializer(RegisterSerializer):
    phoneNumber=serializers.IntegerField(required=True)


    def validate_phoneNumber(self,phoneNumber):
        return phoneNumber

    def get_cleaned_data(self):
        return {
            'phoneNumber': self.validated_data.get('phoneNumber', ''),
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
        }

    def custom_signup(self, request, user):
        user.phoneNumber = self.validated_data.get('phoneNumber', '')
        user.save(update_fields=['phoneNumber'])


class AppartementSerializer(serializers.ModelSerializer):

    class Meta :
        model = Appartement
        fields ="__all__" 
        # ['id','area','bathroom','balcony','loggia','init_price','quantity','plan','state']

class BuyingFormSerializer(serializers.ModelSerializer):
    bank_receipt = serializers.FileField(allow_empty_file=True,required=False)
    state = serializers.CharField(required=False, allow_blank=True)
    identity= serializers.ImageField(max_length=None, allow_empty_file=False, use_url=True)
    appartement = serializers.SlugRelatedField(many=False,queryset=Appartement.objects.all(),slug_field='area')
    description= serializers.CharField(required=False,allow_blank=True)
    class Meta:
        model= BuyingForm
        fields =['id','client','fullname','birthday','birthplace','adress','email','phoneNumber','identity','appartement','furniture','description','floor','bank_receipt','state']
