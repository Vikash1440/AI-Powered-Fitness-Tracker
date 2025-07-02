
from django.urls import path
from api import views 
from .views import *

urlpatterns = [
    path('bmi/', views.save_bmi.as_view()),
    path('add/',addbmi),
    path('delete/<int:pk>/',deletbmi),
    path('aitips/',generateTips),
]
