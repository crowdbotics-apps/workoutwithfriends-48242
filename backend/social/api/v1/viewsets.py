from rest_framework import authentication
from social.models import UserActivity, Friendship
from .serializers import FriendshipSerializer, UserActivitySerializer
from rest_framework import viewsets


class UserActivityViewSet(viewsets.ModelViewSet):
    serializer_class = UserActivitySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserActivity.objects.all()


class FriendshipViewSet(viewsets.ModelViewSet):
    serializer_class = FriendshipSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Friendship.objects.all()
