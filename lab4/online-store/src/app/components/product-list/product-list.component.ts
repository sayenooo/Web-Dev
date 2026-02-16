import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // IMPORTANT: Replace with real Kaspi product links (requirement)
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 12990,
      rating: 4.7,
      image: 'https://via.placeholder.com/800x500?text=Product+1',
      images: [
        'https://via.placeholder.com/800x500?text=Product+1-A',
        'https://via.placeholder.com/800x500?text=Product+1-B',
        'https://via.placeholder.com/800x500?text=Product+1-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 2,
      name: 'Product 2 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 25990,
      rating: 4.5,
      image: 'https://via.placeholder.com/800x500?text=Product+2',
      images: [
        'https://via.placeholder.com/800x500?text=Product+2-A',
        'https://via.placeholder.com/800x500?text=Product+2-B',
        'https://via.placeholder.com/800x500?text=Product+2-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 3,
      name: 'Product 3 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 49990,
      rating: 4.2,
      image: 'https://via.placeholder.com/800x500?text=Product+3',
      images: [
        'https://via.placeholder.com/800x500?text=Product+3-A',
        'https://via.placeholder.com/800x500?text=Product+3-B',
        'https://via.placeholder.com/800x500?text=Product+3-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 4,
      name: 'Product 4 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 79990,
      rating: 4.8,
      image: 'https://via.placeholder.com/800x500?text=Product+4',
      images: [
        'https://via.placeholder.com/800x500?text=Product+4-A',
        'https://via.placeholder.com/800x500?text=Product+4-B',
        'https://via.placeholder.com/800x500?text=Product+4-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 5,
      name: 'Product 5 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 15990,
      rating: 4.1,
      image: 'https://via.placeholder.com/800x500?text=Product+5',
      images: [
        'https://via.placeholder.com/800x500?text=Product+5-A',
        'https://via.placeholder.com/800x500?text=Product+5-B',
        'https://via.placeholder.com/800x500?text=Product+5-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 6,
      name: 'Product 6 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 9990,
      rating: 4.9,
      image: 'https://via.placeholder.com/800x500?text=Product+6',
      images: [
        'https://via.placeholder.com/800x500?text=Product+6-A',
        'https://via.placeholder.com/800x500?text=Product+6-B',
        'https://via.placeholder.com/800x500?text=Product+6-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 7,
      name: 'Product 7 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 34990,
      rating: 4.6,
      image: 'https://via.placeholder.com/800x500?text=Product+7',
      images: [
        'https://via.placeholder.com/800x500?text=Product+7-A',
        'https://via.placeholder.com/800x500?text=Product+7-B',
        'https://via.placeholder.com/800x500?text=Product+7-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 8,
      name: 'Product 8 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 21990,
      rating: 4.3,
      image: 'https://via.placeholder.com/800x500?text=Product+8',
      images: [
        'https://via.placeholder.com/800x500?text=Product+8-A',
        'https://via.placeholder.com/800x500?text=Product+8-B',
        'https://via.placeholder.com/800x500?text=Product+8-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 9,
      name: 'Product 9 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 58990,
      rating: 4.4,
      image: 'https://via.placeholder.com/800x500?text=Product+9',
      images: [
        'https://via.placeholder.com/800x500?text=Product+9-A',
        'https://via.placeholder.com/800x500?text=Product+9-B',
        'https://via.placeholder.com/800x500?text=Product+9-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 10,
      name: 'Product 10 (Kaspi)',
      description: 'Short description (2–3 sentences). Replace with real product details from Kaspi.',
      price: 109990,
      rating: 4.0,
      image: 'https://via.placeholder.com/800x500?text=Product+10',
      images: [
        'https://via.placeholder.com/800x500?text=Product+10-A',
        'https://via.placeholder.com/800x500?text=Product+10-B',
        'https://via.placeholder.com/800x500?text=Product+10-C',
      ],
      link: 'https://kaspi.kz/shop/',
    },
  ];
}
