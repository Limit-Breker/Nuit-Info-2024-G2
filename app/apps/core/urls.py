from django.urls import path

from .views import home,jeu_reins
from .views import foie

urlpatterns = [
    path("", home, name="home"),
    path("accueil/", home, name="home"),
    path("reins/",jeu_reins, name="jeu_reins"),
    path("foie/", foie),
]
