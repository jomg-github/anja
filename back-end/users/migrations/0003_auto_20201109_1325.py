# Generated by Django 2.2.16 on 2020-11-09 04:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20201109_1316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='uid',
            field=models.CharField(max_length=45, primary_key=True, serialize=False),
        ),
    ]