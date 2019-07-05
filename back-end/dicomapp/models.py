#from django.db import models

# Create your models here.

from __future__ import unicode_literals
from django.db import models

import numpy as np

from django.conf import settings
from django.conf.urls.static import static
from django.core.files.base import ContentFile
from django.db import models

import os
import shutil

from datetime import date
import datetime
from django.utils import timezone
from django.utils.timezone import now



class UserManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if (postData['first_name'].isalpha()) == False:
            if len(postData['first_name']) < 2:
                errors['first_name'] = "First name can not be shorter than 2 characters"

        if (postData['last_name'].isalpha()) == False:
            if len(postData['last_name']) < 2:
                errors['last_name'] = "Last name can not be shorter than 2 characters"

        if len(postData['email']) == 0:
            errors['email'] = "You must enter an email"

        if len(postData['password']) < 8:
            errors['password'] = "Password is too short!"

        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
    

# sample form model
class Contact(models.Model):
    first_name = models.CharField(max_length=50,blank=True)
    last_name = models.CharField(max_length=50,blank=True)
    phone=models.CharField(max_length=20)
    email = models.EmailField()  
    comment = models.CharField(max_length=1000)
	
    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)

