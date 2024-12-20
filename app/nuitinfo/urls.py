"""
URL configuration for nuitinfo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

handler400 = "custom_error.views.ui_handler400"
handler403 = "custom_error.views.ui_handler403"
handler404 = "custom_error.views.ui_handler404"
handler500 = "custom_error.views.ui_handler500"

urlpatterns = [
    path("admin/", admin.site.urls),
    path("admin/doc/", include("django.contrib.admindocs.urls")),
    path("", include("core.urls")),
    path("infos/", include("infos.urls")),
    path("auth/", include("authentication.urls")),
    path("api/", include("core_api.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
