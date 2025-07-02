from django.db import models
from django.utils import timezone
# Create your models here.

class BMIRecord(models.Model):
    height = models.FloatField()
    weight = models.FloatField()
    bmi = models.FloatField()
    status=models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
