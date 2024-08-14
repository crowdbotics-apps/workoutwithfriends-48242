from django.conf import settings
from django.db import models


class UserActivity(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="useractivity_user",
    )
    activity_type = models.CharField(
        max_length=50,
    )
    timestamp = models.DateTimeField(
        null=False,
        blank=False,
    )
    description = models.TextField(
        null=True,
        blank=True,
    )


class Friendship(models.Model):
    "Generated Model"
    requester = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="friendship_requests_sent",
        null=False,
        blank=False,
    )
    receiver = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="friendship_requests_received",
        null=False,
        blank=False,
    )
    status = models.CharField(
        max_length=20,
    )


# Create your models here.
