from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Create a superuser admin'

    def handle(self, *args, **kwargs):
        User = get_user_model()
        if not User.objects.filter(email='admin@gmail.com').exists():
            User.objects.create_superuser(username='admin', email='admin@gmail.com', password='admin123')
            self.stdout.write(self.style.SUCCESS('Successfully created superuser'))
