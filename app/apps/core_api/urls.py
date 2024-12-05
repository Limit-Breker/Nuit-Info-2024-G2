from django.urls import path
from .view.profile import ProfileOrganView, ProfileSucceView, ProfilePokecoinView
from .view.pokecoin import PokecoinView
from .view.succe import SucceView


urlpatterns = [
    path('profile/organs/', ProfileOrganView.as_view(), name='profile_organs'),
    path('profile/pokecoins/', ProfileSucceView.as_view(), name='profile_pokecoins'),
    path('profile/success/', ProfilePokecoinView.as_view(), name='profile_success'),
    path('pokecoin/', PokecoinView.as_view(), name='profile_pokecoin'),
    path('success/', SucceView.as_view(), name='success'),
]
