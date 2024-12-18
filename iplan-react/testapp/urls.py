# from django.urls import path
# from . import views

# urlpatterns = [
#     path('transfer/', views.transfer, name='transfer'),
# ]

from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),  # This will handle the root URL
    path('transfer/', views.transfer, name='transfer'),
]

