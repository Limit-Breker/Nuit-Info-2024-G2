from django.shortcuts import render
from .models import InformationOrgane


def home(request):
    infos = InformationOrgane.objects.all()
    return render(request, 'home.html', context={'infos': infos})

def jeu_coeur(request):
    return render(request, 'jeu-coeur.html')
    
def jeu_reins(request):
    return render(request, 'jeu-reins.html')

def foie(request):
    return render(request, 'foie.html')
