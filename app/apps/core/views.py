from django.shortcuts import render
from .models import InformationOrgane


def home(request):
    infos = InformationOrgane.objects.all()
    return render(request, 'home.html', context={'infos': infos})
