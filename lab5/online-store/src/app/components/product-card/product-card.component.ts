import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  @Output() delete = new EventEmitter<number>();

  like(): void {
    this.product.likes += 1;
  }

  requestDelete(): void {
    this.delete.emit(this.product.id);
  }

  // Rating stars
  stars(rating: number): boolean[] {
    const full = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => i < full);
  }

  formatKzt(value: number): string {
    return new Intl.NumberFormat('ru-KZ').format(value) + ' ₸';
  }

  openKaspi(): void {
    window.open(this.product.kaspiUrl, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp(): void {
    const text = `Check out this product: ${this.product.kaspiUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.kaspiUrl)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
