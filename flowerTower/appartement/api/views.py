from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from rest_auth.registration.views import SocialLoginView
from rest_auth.registration.serializers import SocialLoginSerializer
from rest_framework.parsers import FormParser,MultiPartParser
from rest_framework import generics,mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import NotFound
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from allauth.account.models import EmailConfirmation, EmailConfirmationHMAC
from .serializers import *


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
    client_class = OAuth2Client
    callback_url = 'localhost:8000'

    

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client


class ConfirmEmailView(APIView):
    permission_classes = [AllowAny]

    def get(self, *args, **kwargs):
        self.object = confirmation = self.get_object()
        confirmation.confirm(self.request)
        # A React Router Route will handle the failure scenario
        return HttpResponseRedirect('/api/rest-auth/login/')

    def get_object(self, queryset=None):
        key = self.kwargs['key']
        email_confirmation = EmailConfirmationHMAC.from_key(key)
        if not email_confirmation:
            if queryset is None:
                queryset = self.get_queryset()
            try:
                email_confirmation = queryset.get(key=key.lower())
            except EmailConfirmation.DoesNotExist:
                # A React Router Route will handle the failure scenario
                return HttpResponseRedirect('/login/failure/')
        return email_confirmation

    def get_queryset(self):
        qs = EmailConfirmation.objects.all_valid()
        qs = qs.select_related("email_address__user")
        return qs

class AppartementView(mixins.CreateModelMixin,generics.GenericAPIView):

  lookup_field='pk'
  serializer_class = AppartementSerializer
  authentication_classes = [TokenAuthentication]

  def get_queryset(self):
    return Appartement.objects.all()

  def post(self,request,*args,**kwargs):
    return self.create(request,*args,**kwargs)


class CreateBuyingFormView(mixins.CreateModelMixin,generics.GenericAPIView):
  parser_classes=[FormParser,MultiPartParser]
  lookup_field='pk'
  serializer_class = BuyingFormSerializer
  authentication_classes = [TokenAuthentication]

  def get_queryset(self):
    return BuyingForm.objects.all()

  def perform_create(self,serializer):
    print(self.request.user)
    serializer.save(client=self.request.user)

  def post(self,request,*args,**kwargs):
    return self.create(request,*args,**kwargs)


class ListBuyingFormView(mixins.ListModelMixin,generics.GenericAPIView):

  queryset = BuyingForm.objects.all()
  serializer_class = BuyingFormSerializer
  authentication_classes = [TokenAuthentication]
  

  def get(self,request,*args,**kwargs):
    return self.list(request,*args,**kwargs)


class DetailBuyingFormView(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
                    
  parser_classes=[FormParser,MultiPartParser]
  Lookup_field='pk'
  serializer_class=BuyingFormSerializer
  authentication_classes = [TokenAuthentication]


  def get_queryset(self):
    return BuyingForm.objects.filter(pk=self.kwargs['pk'])


    def get(self,request,*args,**kwargs):
      return self.retrieve(request,*args,**kwags)

    def put(self,request,*args,**kwargs):

      return self.update(request,*args,**kwargs)

    def delete(self,request,*args,**kwargs):
      self.destroy(request,*args,**kwargs)
 
  
  