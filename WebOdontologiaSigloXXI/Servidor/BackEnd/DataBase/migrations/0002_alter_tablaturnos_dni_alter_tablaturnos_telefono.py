# Generated by Django 5.1 on 2024-08-22 01:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DataBase', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tablaturnos',
            name='dni',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='tablaturnos',
            name='telefono',
            field=models.IntegerField(),
        ),
    ]
