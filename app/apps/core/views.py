from django.shortcuts import render
from .models import InformationOrgane


def home(request):
    infos = InformationOrgane.objects.all()
    return render(request, 'home.html', context={'infos': infos})

def jeu_reins(request):
    a = 2
    return render(request, 'jeu-reins.html',context = {'a':a})
