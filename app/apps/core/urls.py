from django.urls import path

from .views import home, jeu_coeur, jeu_reins, foie

urlpatterns = [
    path("", home, name="home"),
    path("accueil/", home, name="home"),
    path("coeur/",jeu_coeur, name="coeur"),
    path("reins/",jeu_reins, name="rein"),
    path("foie/", foie, name="foie"),
]
