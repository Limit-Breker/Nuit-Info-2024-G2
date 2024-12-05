from django.shortcuts import render, redirect
from .forms import LoginForm, RegisterForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages


def auth_register(request):
    form = RegisterForm(request.POST)
    if form.is_valid():
        User.objects.create_user(
            username=form.cleaned_data["username"],
            password=form.cleaned_data["password"],
        )
        messages.success(request, "Compte créé avec succès")
        return redirect("/")
    return render(request, "register.html", context={"form": form})


def auth_login(request):
    form = LoginForm(request.POST)
    if form.is_valid():
        username = form.cleaned_data["username"]
        password = form.cleaned_data["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            request.session['username'] = username
            request.session.save()
            messages.success(request, "Vous êtes connecté avec succès")
            return redirect('/')
        else:
            messages.error(request, "Nom d'utilisateur ou mot de passe incorrect")
            return render(request, "login.html", context={"form": form})
    return render(request, "login.html", context={"form": form})


def auth_logout(request):
    request.session.flush()
    logout(request)
    messages.success(request, "Vous avez été déconnecté avec succès")
    return redirect("/")
