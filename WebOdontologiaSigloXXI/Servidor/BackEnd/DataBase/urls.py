from django.urls import path, include
from rest_framework import routers
from DataBase import views

router = routers.DefaultRouter()
router.register(r'DataBase', views.viewTurnos, 'DataBase')

urlpatterns = [
    path("apiTurnos/", include(router.urls)),
]