from rest_framework import authentication
from workouts.models import WorkoutLog, Workout
from .serializers import WorkoutSerializer, WorkoutLogSerializer
from rest_framework import viewsets


class WorkoutLogViewSet(viewsets.ModelViewSet):
    serializer_class = WorkoutLogSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = WorkoutLog.objects.all()


class WorkoutViewSet(viewsets.ModelViewSet):
    serializer_class = WorkoutSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Workout.objects.all()
