from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):

    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, null=True, blank=True)
    middle_name = models.CharField(_('middle name'), max_length=255, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        db_table = 'user'
        db_table_comment = 'Пользователи'
        verbose_name = 'Пользователь'
        verbose_name_plural = db_table_comment
        default_related_name = 'users'
