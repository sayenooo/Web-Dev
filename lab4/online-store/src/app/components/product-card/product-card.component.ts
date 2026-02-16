import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input({ required: true }) product!: Product;

  activeImage = '';

  ngOnInit(): void {
    this.activeImage = this.product.image || this.product.images?.[0] || '';
  }

  setImage(url: string): void {
    this.activeImage = url;
  }

  // Rating stars: filled/empty (simple)
  stars(rating: number): boolean[] {
    const full = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => i < full);
  }

  formatKzt(value: number): string {
    return new Intl.NumberFormat('ru-KZ').format(value) + ' ₸';
  }

  openKaspi(): void {
    window.open(this.product.link, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp(): void {
    // spec: https://wa.me/?text=Check out this product: {kaspi_link}
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  shareTelegram(): void {
    // spec: https://t.me/share/url?url={kaspi_link}&text={product_name}
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
