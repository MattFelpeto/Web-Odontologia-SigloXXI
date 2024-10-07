from rest_framework import viewsets
from .serializer import TurnosSerializer
from .models import tablaTurnos

# Create your views here.

class viewTurnos (viewsets.ModelViewSet):
    serializer_class = TurnosSerializer
    queryset = tablaTurnos.objects.all()
