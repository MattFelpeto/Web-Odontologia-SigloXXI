# Generated by Django 5.1 on 2024-08-28 02:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('DataBase', '0007_alter_tablaturnos_dni_alter_tablaturnos_telefono'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tablaturnos',
            name='turnoFecha',
        ),
    ]
