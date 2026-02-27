import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

type SortMode = 'NONE' | 'PRICE_ASC' | 'PRICE_DESC';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = signal<Product[]>([]);
  sortMode = signal<SortMode>('NONE');

  // вот это будет отображаться в шаблоне вместо products()
  viewProducts = computed(() => {
    const list = this.products();
    const mode = this.sortMode();

    if (mode === 'NONE') return list;

    const copy = [...list];
    copy.sort((a, b) => {
      if (mode === 'PRICE_ASC') return a.price - b.price;
      return b.price - a.price;
    });
    return copy;
  });

  constructor(private ps: ProductsService) {
    this.products.set(this.ps.getProducts());
  }

  sortAsc() {
    this.sortMode.set('PRICE_ASC');
  }

  sortDesc() {
    this.sortMode.set('PRICE_DESC');
  }

  resetSort() {
    this.sortMode.set('NONE');
  }

  onDelete(id: number) {
    this.products.update(list => list.filter(p => p.id !== id));
  }
}