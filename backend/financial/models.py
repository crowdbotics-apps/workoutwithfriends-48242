from django.conf import settings
from django.db import models


class Penalty(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="penalty_user",
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    due_date = models.DateField(
        null=True,
        blank=True,
    )
    status = models.CharField(
        max_length=20,
    )


class Transaction(models.Model):
    "Generated Model"
    penalty = models.ForeignKey(
        "financial.Penalty",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="transaction_penalty",
    )
    transaction_date = models.DateTimeField(
        null=False,
        blank=False,
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    status = models.CharField(
        max_length=20,
    )


# Create your models here.
