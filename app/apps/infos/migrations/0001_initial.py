# Generated by Django 5.1.3 on 2024-12-06 05:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("core", "0002_informationorgane_remove_pokecoin_valeur"),
    ]

    operations = [
        migrations.CreateModel(
            name="Info",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=100)),
                ("description", models.TextField()),
                ("organe", models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to="core.informationorgane")),
            ],
        ),
    ]
