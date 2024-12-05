from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def chalutier(request):
    return render(request, 'chalutier.html')


black_list = ['render']
__all__ = [func for func in dir() if not func.startswith('__') and func not in black_list]
