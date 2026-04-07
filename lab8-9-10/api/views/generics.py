from rest_framework import generics
from ..models import Product, Category
from ..serializers import ProductSerializer, CategorySerializer

# 1. Список всех товаров и создание нового (ЭТОГО КЛАССА НЕ ХВАТАЛО)
class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# 2. Товары внутри конкретной категории
class CategoryProductsAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs.get('pk')
        return Product.objects.filter(category_id=category_id)

# 3. Детали, обновление и удаление конкретного товара
class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

# 4. Список категорий
class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# 5. Детали конкретной категории
class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer