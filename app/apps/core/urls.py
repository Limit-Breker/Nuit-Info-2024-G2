from django.urls import path

from .views import home,jeu_reins

urlpatterns = [
    path("", home, name="home"),
    path("accueil/", home, name="home"),
    path("reins/",jeu_reins, name="jeu_reins"),
]
