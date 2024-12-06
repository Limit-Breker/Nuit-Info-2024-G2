from django.db import models


class Profile(models.Model):
    utilisateur = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    pokecoin = models.ManyToManyField('Pokecoin', through='ProfilePokecoin', blank=True)
    succes = models.ManyToManyField('Succe', through='ProfileSucce', blank=True)
    coeur = models.BooleanField(default=False)
    poumon = models.BooleanField(default=False)
    foie = models.BooleanField(default=False)
    rein = models.BooleanField(default=False)

    def __str__(self):
        return self.utilisateur.username


class Pokecoin(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.nom


class Succe(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.nom


class ProfilePokecoin(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    pokecoin = models.ForeignKey(Pokecoin, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('profile', 'pokecoin')


class ProfileSucce(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    succe = models.ForeignKey(Succe, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('profile', 'succe')


class InformationOrgane(models.Model):
    ORGANES = (
        ('Coeur', 'Coeur'),
        ('Poumon', 'Poumon'),
        ('Foie', 'Foie'),
        ('Rein', 'Rein'),
    )
    organe = models.CharField(max_length=100, choices=ORGANES, unique=True)
    nom = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.organe
