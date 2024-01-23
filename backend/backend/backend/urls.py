from django.urls import path
from .views import save_to_file

urlpatterns = [
    path('save_to_file/', save_to_file),
]
