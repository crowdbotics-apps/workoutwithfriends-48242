from django.contrib import admin
from .models import Workout, WorkoutLog

admin.site.register(WorkoutLog)
admin.site.register(Workout)

# Register your models here.
