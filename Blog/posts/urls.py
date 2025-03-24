from django.urls import path, include
from .views import PostsView, SinglePostView

app_name = 'posts'

urlpatterns = [
    path('', PostsView.as_view(), ),
    path('<str:id>/', SinglePostView.as_view(), ),
]