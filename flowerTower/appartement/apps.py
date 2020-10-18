from django.apps import AppConfig


class AppartementConfig(AppConfig):
    name = 'appartement'

    def ready(self):
        from . import signals 
