from django.contrib import admin
from .models import BMIRecord
# Register your models here.

@admin.register(BMIRecord)
class BMIRecordAdmin(admin.ModelAdmin):
    list_display=['id','height','weight','bmi','status','created_at']