from rest_framework import serializers
from core.models import Post
from django.contrib.auth.models import User


class PostSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Post
		fields = ('id','title', 'description', 'timestamp')