# Generated by Django 5.1 on 2024-08-28 02:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DataBase', '0005_tablaturnos_dni_tablaturnos_especialidad_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tablaturnos',
            name='dni',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='tablaturnos',
            name='telefono',
            field=models.IntegerField(default=2),
            preserve_default=False,
        ),
    ]
