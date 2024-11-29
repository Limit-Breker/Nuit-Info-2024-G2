#!/bin/sh

set -ex

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $DB_HOST $DB_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

python3 manage.py migrate --settings=nuitinfo.settings.development
python3 manage.py collectstatic --noinput --settings=nuitinfo.settings.development

cat <<EOF | python manage.py shell
from django.contrib.auth import get_user_model

User = get_user_model()  # get the currently active user model,

User.objects.filter(username='admin').exists() or \
    User.objects.create_superuser('admin', 'admin@example.com', 'iutinfo')
EOF

python3 manage.py runserver 0.0.0.0:8000 --settings=nuitinfo.settings.development

exec "$@"