from django.urls import path

from .views import home,jeu_reins

urlpatterns = [
    path("", home),
    path("accueil/", home),
    path("reins/",jeu_reins),
]
