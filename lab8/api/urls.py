from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

# 1. Initialize the DefaultRouter
router = DefaultRouter()

# 2. Register your ViewSets
# This automatically creates all URL patterns for GET, POST, PUT, DELETE
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

# 3. Include the router URLs in urlpatterns
urlpatterns = [
    path('', include(router.urls)),
]