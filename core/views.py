from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import View, TemplateView
from rest_framework.generics import (
    ListCreateAPIView, 
    RetrieveAPIView, 
    UpdateAPIView, 
    DestroyAPIView)
from rest_framework.permissions import AllowAny, IsAdminUser
from core.serializers import PostSerializer
from .models import Post
from .permissions import IsOwnerOrReadOnly
# Create your views here.

class AngularApp(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(AngularApp, self).get_context_data(**kwargs)
        context['ANGULAR_URL'] = settings.ANGULAR_URL
        return context


class SampleView(View):
	"""View to render django template to angular"""
	def get(self, request):
		return HttpResponse("OK!")


class NgTemplateView(View):
	"""View to render django template to angular"""
	def get(self, request):
		return render(request, 'template.html', {"django_variable": "This is django context variable"})


class PostListAPIView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]

class PostDetailAPIView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]

class PostUpdateAPIView(UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]

class PostDeleteAPIView(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]
