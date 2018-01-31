# Generated by Django 2.0.1 on 2018-01-31 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crypto', '0002_auto_20180130_2028'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserPortfolio',
            fields=[
                ('portfolio_id', models.IntegerField(primary_key=True, serialize=False)),
                ('currency_name', models.CharField(max_length=200)),
                ('currency_code', models.CharField(max_length=10)),
                ('currency_amount', models.IntegerField()),
                ('user', models.ManyToManyField(to='crypto.User')),
            ],
        ),
        migrations.DeleteModel(
            name='UserCurrencies',
        ),
    ]
