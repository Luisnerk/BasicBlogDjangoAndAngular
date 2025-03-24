from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import PostSerializer
from .models import Post

# Create your views here.
class PostsView(APIView):
    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serialized_posts = PostSerializer(posts, many=True)
        return Response(serialized_posts.data)
    
    def post(self, request):
        data = request.data
        serialized_post = PostSerializer(data = data)
        if (serialized_post.is_valid()):
            serialized_post.save()
            return Response(serialized_post.data)
        return Response(serialized_post.errors)


class SinglePostView(APIView):
    def get(self, request, id):
        try:
            post = Post.objects.get(pk=id)
            serialized_post = PostSerializer(post)
        except Post.DoesNotExist:
            return Response({
                'Error': 'Post not found'
            })

        return Response(serialized_post.data)