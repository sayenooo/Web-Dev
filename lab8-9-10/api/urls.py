from django.urls import path
from api import views  # Импортируем из __init__.py

urlpatterns = [
    # Для Level 2 (FBV) в urls.py функции пишутся без .as_view()
    # Но так как мы переходим к CBV/Generics, используем:
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    
    # Дополнительно для Level 5:
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:pk>/products/', views.CategoryProductsAPIView.as_view()),
]