from django.contrib import admin

# Register your models here.
from .models import Post
# Register your models here.
class PostAdminModel(admin.ModelAdmin):
	list_display = ["title", "updated","timestamp"]
	list_display_links = ["title"]
	list_filter =["updated","timestamp"]
	class Meta:
		model = Post

admin.site.register(Post,PostAdminModel)