from django.db import models
from core.models import InformationOrgane


class Info(models.Model):
    organe = models.ForeignKey(InformationOrgane, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
