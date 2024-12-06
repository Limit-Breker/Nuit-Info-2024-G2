from django.shortcuts import render
from .models import Info
from core.models import Pokecoin


def info_specifique(request, organe_name):
    infos = Info.objects.filter(organe__organe=organe_name.capitalize())
    return render(request, 'info.html', {'infos': infos})


def infos_generales(request):
    infos = Info.objects.all()
    return render(request, 'info.html', {'infos': infos})


def podcast(request):
    return render(request, 'podcast.html')
