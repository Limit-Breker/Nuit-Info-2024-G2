# url for info

from django.urls import path

from . import views

urlpatterns = [
    path('specifique/<str:organe_name>/', views.info_specifique, name='info_specifique'),
    path('', views.infos_generales, name='infos'),
    path('podcast/', views.podcast, name='podcast')
]
