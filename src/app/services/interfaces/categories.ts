import { ProductDetails } from './productDetails';

export interface Categories {
  categoryId: number;
  categoryName: string;
  products: ProductDetails[];
}
