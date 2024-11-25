# NUIT INFO 2024 - Limit Braker

## Préréquis

Créer un fichier `.env` à la racine du projet avec les variables suivantes :
```sh
cp template.env .env
```

## Lancement local

### Via docker compose

L'application peut être testé en local via la commande :
```bash
docker-compose -f docker-compose.dev.yml up --build
```

De manière similaire, lorsqu'un des modèles est mis à jours les migrations peuvent être crées tels que :
```bash
# Creation migrations
docker-compose -f docker-compose.dev.yml exec web python manage.py makemigrations
# Application migrations
docker-compose -f docker-compose.dev.yml exec web python manage.py migrate
```

L'adresse de test est https://localhost.


### ~~Via manage.py~~ (Déprécié)

L'application peut être testé en local via la commande :
```sh
./manage.py runserver_plus --cert-file ../nginx/ssl/certs/self_ssl_certs.pem --key-file ../nginx/ssl/private/self_ssl_certs.key
```

L'adresse de test est https://localhost:8000.


## Documentation

### Tailwind CSS

[Documentation complete](https://tailwindcss.com/docs)

### Django

[Documentation complete](https://docs.djangoproject.com/fr/5.1/)

### Django Rest Framework

[Documentation complete](https://www.django-rest-framework.org/)