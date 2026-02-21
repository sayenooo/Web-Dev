export interface Product {
  id: number;
  categoryId: number;

  name: string;
  description: string;

  price: number;
  rating: number;
  likes: number;

  imageUrl: string;
  kaspiUrl: string;
}
