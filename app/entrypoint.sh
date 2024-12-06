#!/bin/sh

set -ex

DJANGO_SETTINGS_MODULE=nuitinfo.settings.production

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $DB_HOST $DB_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

python3 manage.py migrate --settings=nuitinfo.settings.production
python3 manage.py collectstatic --settings=nuitinfo.settings.production --no-input

cat <<EOF | python manage.py shell
from django.core.management import call_command
call_command('populate')
EOF
gunicorn nuitinfo.wsgi:application --bind 0.0.0.0:8000

exec "$@"