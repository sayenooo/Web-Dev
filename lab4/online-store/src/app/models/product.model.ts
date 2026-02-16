export interface Product {
  id: number;
  name: string;
  description: string; // 2–3 sentences
  price: number;       // KZT
  rating: number;      // 1..5 (can be decimal e.g. 4.7)
  image: string;       // main image URL or local path
  images: string[];    // gallery (min 3)
  link: string;        // direct Kaspi URL
}
