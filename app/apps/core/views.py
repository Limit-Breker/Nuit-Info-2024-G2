from django.shortcuts import render


def home(request):
    return render(request, 'home.html')

def jeu_reins(request):
    a = 2
    return render(request, 'jeu-reins.html',context = {'a':a})