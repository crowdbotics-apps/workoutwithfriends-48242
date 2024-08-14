from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import WorkoutViewSet, WorkoutLogViewSet

router = DefaultRouter()
router.register("workoutlog", WorkoutLogViewSet)
router.register("workout", WorkoutViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
