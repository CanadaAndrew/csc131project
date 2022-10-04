from django.urls import path
from . import views

urlpatterns = [
    path('SSInfo/', views.onLoad)
]