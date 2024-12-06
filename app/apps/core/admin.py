from django.contrib import admin
from .models import Profile, ProfilePokecoin, ProfileSucce, InformationOrgane


class ProfilePokecoinInline(admin.TabularInline):
    model = ProfilePokecoin
    extra = 0
    readonly_fields = ['pokecoin']


class ProfileSucceInline(admin.TabularInline):
    model = ProfileSucce
    extra = 0
    readonly_fields = ['succe']


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('utilisateur', 'get_pokecoins', 'get_succes')
    search_fields = ('utilisateur__username',)
    inlines = [ProfilePokecoinInline, ProfileSucceInline]
    readonly_fields = ('utilisateur',)

    def get_pokecoins(self, obj):
        """Display a comma-separated list of pokecoins."""
        return ", ".join([pokecoin.nom for pokecoin in obj.pokecoin.all()])
    get_pokecoins.short_description = "Pokecoins"

    def get_succes(self, obj):
        """Display a comma-separated list of successes."""
        return ", ".join([succes.nom for succes in obj.succes.all()])
    get_succes.short_description = "Succes"


admin.site.register(InformationOrgane)
