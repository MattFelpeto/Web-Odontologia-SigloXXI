# Generated by Django 5.1 on 2024-10-05 00:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DataBase', '0009_tablaturnos_turnofecha'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tablaturnos',
            name='especialidad',
            field=models.CharField(max_length=100),
        ),
    ]
