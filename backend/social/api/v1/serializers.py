from rest_framework import serializers
from social.models import Friendship, UserActivity


class UserActivitySerializer(serializers.ModelSerializer):

    class Meta:
        model = UserActivity
        fields = "__all__"


class FriendshipSerializer(serializers.ModelSerializer):

    class Meta:
        model = Friendship
        fields = "__all__"
