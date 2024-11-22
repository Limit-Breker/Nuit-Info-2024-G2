from dotenv import load_dotenv

from .base import *

load_dotenv()

DEBUG = False

SESSION_ENGINE = "django.contrib.sessions.backends.cache"
SESSION_CACHE_ALIAS = "default"
