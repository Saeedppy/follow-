from django.shortcuts import render,get_object_or_404
from .models import *
from .forms import *


# Create your views here.
def home(request):
   comments = Comment.objects.filter(active=True)
   new_comment = None 
   if request.method == 'POST':
      comment_form = CommentForm(request.POST)
      if comment_form.is_valid():
         new_comment = comment_form.save(commit=False)
         new_comment.save()
   else:
      comment_form = CommentForm()

   context={
      'comments':comments,
      'new_comment':new_comment,
      'comment_form':comment_form,

   }
   return render(request,"blog/home.html",context)

def followers(request):
   comments = Comment.objects.filter(active=True)
   new_comment = None 
   if request.method == 'POST':
      comment_form = CommentForm(request.POST)
      if comment_form.is_valid():
         new_comment = comment_form.save(commit=False)
         new_comment.save()
   else:
      comment_form = CommentForm()

   context={
      'comments':comments,
      'new_comment':new_comment,
      'comment_form':comment_form,

   }
   return render(request,"blog/instagram-followers.html",context)

def likes(request):
   comments = Comment.objects.filter(active=True)
   new_comment = None 
   if request.method == 'POST':
      comment_form = CommentForm(request.POST)
      if comment_form.is_valid():
         new_comment = comment_form.save(commit=False)
         new_comment.save()
   else:
      comment_form = CommentForm()

   context={
      'comments':comments,
      'new_comment':new_comment,
      'comment_form':comment_form,

   }
   return render(request,"blog/instagram-likes.html",context)

def views(request):
   comments = Comment.objects.filter(active=True)
   new_comment = None 
   if request.method == 'POST':
      comment_form = CommentForm(request.POST)
      if comment_form.is_valid():
         new_comment = comment_form.save(commit=False)
         new_comment.save()
   else:
      comment_form = CommentForm()

   context={
      'comments':comments,
      'new_comment':new_comment,
      'comment_form':comment_form,

   }
   return render(request,"blog/instagram-views.html",context)