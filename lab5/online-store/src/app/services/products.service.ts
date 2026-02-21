import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private readonly products: Product[] = [
    // IMPORTANT: заменишь kaspiUrl на реальные ссылки с kaspi.kz (20 штук)
    { id: 101, categoryId: 1, name: 'iPhone 14', description: '128GB', price: 299990, rating: 4.8, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 102, categoryId: 1, name: 'Samsung Galaxy S23', description: '256GB', price: 389990, rating: 4.7, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 103, categoryId: 1, name: 'Xiaomi 13', description: '256GB', price: 259990, rating: 4.6, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 104, categoryId: 1, name: 'Google Pixel 7', description: '128GB', price: 279990, rating: 4.5, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 105, categoryId: 1, name: 'Realme 11 Pro', description: '256GB', price: 199990, rating: 4.4, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },

    { id: 201, categoryId: 2, name: 'MacBook Air M1', description: '8/256', price: 449990, rating: 4.8, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 202, categoryId: 2, name: 'Lenovo IdeaPad 5', description: '16/512', price: 329990, rating: 4.6, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 203, categoryId: 2, name: 'HP Pavilion', description: '16/512', price: 319990, rating: 4.5, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 204, categoryId: 2, name: 'ASUS VivoBook', description: '8/512', price: 279990, rating: 4.4, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 205, categoryId: 2, name: 'Acer Aspire 5', description: '8/512', price: 269990, rating: 4.3, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },

    { id: 301, categoryId: 3, name: 'AirPods Pro 2', description: 'ANC', price: 129990, rating: 4.8, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 302, categoryId: 3, name: 'Sony WH-1000XM5', description: 'ANC', price: 179990, rating: 4.9, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 303, categoryId: 3, name: 'JBL Tune 760NC', description: 'ANC', price: 59990, rating: 4.5, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 304, categoryId: 3, name: 'HyperX Cloud II', description: 'Gaming', price: 54990, rating: 4.6, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 305, categoryId: 3, name: 'Samsung Buds 2', description: 'TWS', price: 49990, rating: 4.4, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },

    { id: 401, categoryId: 4, name: 'iPad 10', description: '64GB', price: 229990, rating: 4.7, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 402, categoryId: 4, name: 'iPad Air', description: '256GB', price: 399990, rating: 4.8, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 403, categoryId: 4, name: 'Samsung Galaxy Tab S9', description: '128GB', price: 349990, rating: 4.6, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 404, categoryId: 4, name: 'Xiaomi Pad 6', description: '256GB', price: 199990, rating: 4.5, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
    { id: 405, categoryId: 4, name: 'Lenovo Tab P11', description: '128GB', price: 149990, rating: 4.2, likes: 0, imageUrl: 'https://via.placeholder.com/220x160', kaspiUrl: 'https://kaspi.kz/' },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products.map(p => ({ ...p }));
  }
}
