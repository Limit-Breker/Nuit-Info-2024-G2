from django.urls import path

from .views import *

urlpatterns = [
    path("", home),
    path("accueil/", home),
    path("chalutier/", chalutier)
]
