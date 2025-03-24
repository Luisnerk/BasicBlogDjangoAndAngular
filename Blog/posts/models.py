from django.db import models

# Create your models here.
class Post(models.Model):
    created_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=250)