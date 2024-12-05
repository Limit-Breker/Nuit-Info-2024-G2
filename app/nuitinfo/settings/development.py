from dotenv import load_dotenv

from .base import *

DEBUG = True

INSTALLED_APPS += [
    "django.contrib.admindocs",
]
