from django.shortcuts import render
from .models import InformationOrgane


def home(request):
    infos = InformationOrgane.objects.all()
    return render(request, 'home.html', context={'infos': infos})

def jeu_coeur(request):
    a = 2
    return render(request, 'jeu-coeur.html',context = {'a':a})
