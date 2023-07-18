from django.contrib import admin
from .models import *
# Register your models here.

class CommentAdmin(admin.ModelAdmin):
    list_disply = ('full_name','text','created','active')
    



admin.site.register(Comment,CommentAdmin)
