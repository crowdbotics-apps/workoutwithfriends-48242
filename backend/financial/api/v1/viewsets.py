from rest_framework import authentication
from financial.models import Penalty, Transaction
from .serializers import PenaltySerializer, TransactionSerializer
from rest_framework import viewsets


class PenaltyViewSet(viewsets.ModelViewSet):
    serializer_class = PenaltySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Penalty.objects.all()


class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Transaction.objects.all()
