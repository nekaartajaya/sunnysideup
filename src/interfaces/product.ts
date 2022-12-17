export interface ProductInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  category: string;
  brand: string;
  discountPercentage?: number;
  image?: Array<string>;
}
