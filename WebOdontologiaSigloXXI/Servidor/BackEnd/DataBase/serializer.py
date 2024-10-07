from rest_framework import serializers
from .models import tablaTurnos

class TurnosSerializer (serializers.ModelSerializer):
    class Meta:
        model = tablaTurnos
        fields = "__all__"