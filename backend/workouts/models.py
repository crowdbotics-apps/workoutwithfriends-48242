from django.conf import settings
from django.db import models


class WorkoutLog(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="workoutlog_user",
    )
    workout = models.ForeignKey(
        "workouts.Workout",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="workoutlog_workout",
    )
    date = models.DateField(
        null=False,
        blank=False,
    )
    time = models.TimeField(
        null=True,
        blank=True,
    )
    performance_notes = models.TextField(
        null=True,
        blank=True,
    )


class Workout(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    duration = models.IntegerField(
        null=True,
        blank=True,
    )
    intensity = models.CharField(
        max_length=50,
    )
    calories_burned = models.IntegerField(
        null=True,
        blank=True,
    )


# Create your models here.
