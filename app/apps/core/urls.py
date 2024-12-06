from django.urls import path

from .views import home, jeu_coeur

urlpatterns = [
    path("", home, name="home"),
    path("accueil/", home, name="home"),
    path("coeur/",jeu_coeur)
]
