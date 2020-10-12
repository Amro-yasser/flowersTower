from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from rest_auth.registration.views import SocialLoginView
from rest_auth.registration.serializers import SocialLoginSerializer
from rest_framework import generics,mixins
from .serializers import *


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
    client_class = OAuth2Client
    callback_url = 'localhost:8000'

    

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client


class AppartementView(mixins.CreateModelMixin,generics.GenericAPIView):

  lookup_field='pk'
  serializer_class = AppartementSerializer

  def get_queryset(self):
    return Appartement.objects.all()

  def post(self,request,*args,**kwargs):
    return self.create(request,*args,**kwargs)


class CreateBuyingFormView(mixins.CreateModelMixin,generics.GenericAPIView):

  lookup_field='pk'
  serializer_class = BuyingFormSerializer

  def get_queryset(self):
    return BuyingForm.objects.all()

  def post(self,request,*args,**kwargs):
    return self.create(request,*args,**kwargs)


class ListBuyingFormView(mixins.ListModelMixin,generics.GenericAPIView):

  queryset = BuyingForm.objects.all()
  serializer_class = BuyingFormSerializer

  

  def get(self,request,*args,**kwargs):
    return self.list(request,*args,**kwargs)


class DetailBuyingFormView(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):

  Lookup_field='pk'
  serializer_class=BuyingFormSerializer


  def get_queryset(self):
    return BuyingForm.objects.filter(pk=self.kwargs['pk'])


    def get(self,request,*args,**kwargs):
      return self.retrieve(request,*args,**kwags)

    def put(self,request,*args,**kwargs):
      return self.update(request,*argsm,**kwargs)

    def delete(self,request,*args,**kwargs):
      self.destroy(request,*args,**kwargs)
 
  
  