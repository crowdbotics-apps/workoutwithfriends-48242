from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PenaltyViewSet, TransactionViewSet

router = DefaultRouter()
router.register("penalty", PenaltyViewSet)
router.register("transaction", TransactionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
