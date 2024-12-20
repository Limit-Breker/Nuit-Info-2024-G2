# Generated by Django 5.1.3 on 2024-12-06 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="InformationOrgane",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("organe", models.CharField(choices=[("Coeur", "Coeur"), ("Poumon", "Poumon"), ("Foie", "Foie"), ("Rein", "Rein")], max_length=100, unique=True)),
                ("nom", models.CharField(max_length=100)),
                ("description", models.TextField()),
            ],
        ),
        migrations.RemoveField(
            model_name="pokecoin",
            name="valeur",
        ),
    ]
