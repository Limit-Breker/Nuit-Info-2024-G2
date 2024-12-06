from django.shortcuts import render
from .models import InformationOrgane


def home(request):
<<<<<<< HEAD
    infos = InformationOrgane.objects.all()
    return render(request, 'home.html', context={'infos': infos})
=======
    return render(request, 'home.html')

def jeu_reins(request):
    a = 2
    return render(request, 'jeu-reins.html',context = {'a':a})
>>>>>>> c29369e (feature : wip reins)
