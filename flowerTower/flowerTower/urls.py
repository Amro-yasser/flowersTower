from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from appartement.api.views import FacebookLogin,GoogleLogin
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include('appartement.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('accounts/', include('allauth.urls')),
    path('auth/', include('rest_framework_social_oauth2.urls')),
    

]
