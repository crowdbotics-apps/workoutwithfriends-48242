from rest_framework import serializers
from workouts.models import Workout, WorkoutLog


class WorkoutLogSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkoutLog
        fields = "__all__"


class WorkoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Workout
        fields = "__all__"
