from django.urls import path

from .views import home
from .views import foie

urlpatterns = [
    path("", home),
    path("accueil/", home),
    path("foie/", foie),
]
