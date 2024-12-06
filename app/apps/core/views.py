from django.shortcuts import render


def home(request):
    return render(request, 'home.html')

def foie(request):
    return render(request, 'foie.html')
