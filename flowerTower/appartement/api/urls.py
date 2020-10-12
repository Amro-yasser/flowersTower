from django.urls import path
from .views import *

urlpatterns = [
    path('add-Appartement/', AppartementView.as_view(), name='appartement'),
    path('add-form/', CreateBuyingFormView.as_view(), name='Form'),
    path('list-form/', ListBuyingFormView.as_view(), name='Form'),
    path('form/<pk>/', DetailBuyingFormView.as_view(), name='Form'),

]
