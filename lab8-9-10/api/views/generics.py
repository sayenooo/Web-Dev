from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from ..models import Product, Category
from ..serializers import ProductSerializer, CategorySerializer

# Product Views
class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

# Category Views (New for Level 5)
class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Custom view for /categories/<id>/products/
class CategoryProductsAPIView(APIView):
    def get(self, request, pk):
        products = Product.objects.filter(category_id=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)