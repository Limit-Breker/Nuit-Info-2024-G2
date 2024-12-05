from dotenv import load_dotenv

from .base import *

DEBUG = False

INSTALLED_APPS += [
    "django.contrib.admindocs",
]
