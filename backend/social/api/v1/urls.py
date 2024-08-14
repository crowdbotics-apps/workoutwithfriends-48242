from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import FriendshipViewSet, UserActivityViewSet

router = DefaultRouter()
router.register("useractivity", UserActivityViewSet)
router.register("friendship", FriendshipViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
