from django.urls import path 
from . import views


app_name="blog"
urlpatterns=[
    path('',views.home,name="home"),
    path('buy-instagram-followers',views.followers,name="followers"),
    path('buy-instagram-likes',views.likes,name="likes"),
    path('buy-instagram-views',views.views,name="views"),

    
]