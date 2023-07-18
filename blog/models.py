from django.db import models

# Create your models here.
class Comment(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    active  = models.BooleanField(default=False)
    

    class Meta():
        ordering=('created',)

    def __str__(self):
        return "comment by {0} ".format(self.full_name)