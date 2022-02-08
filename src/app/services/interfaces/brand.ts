import { ProductDetails } from './productDetails';

export interface Brand {
  brandId: number;
  brandName: string;
  products: ProductDetails[];
}
