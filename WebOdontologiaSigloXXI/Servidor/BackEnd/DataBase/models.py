from django.db import models
from django.utils import timezone

class tablaTurnos (models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=70)   
    dni = models.IntegerField(null='true')
    email = models.EmailField(max_length=200)
    telefono = models.IntegerField(null='true')
    especialidad = models.CharField(max_length=100)
    turnoFecha = models.DateField(default=timezone.now)


    
    def __str__(self):
        return self.nombre