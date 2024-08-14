from django.contrib import admin
from .models import Friendship, UserActivity

admin.site.register(UserActivity)
admin.site.register(Friendship)

# Register your models here.
