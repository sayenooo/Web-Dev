import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';

import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  standalone: true,
  selector: 'app-store',
  imports: [ProductListComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  categories: Category[] = [];
  allProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productsService: ProductsService) {
    this.categories = this.productsService.getCategories();
    this.allProducts = this.productsService.getProducts();

    console.log('categories', this.categories);
    console.log('allProducts length', this.allProducts.length);
    console.log('first product', this.allProducts[0]);
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }



  handleDelete(productId: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }
}
