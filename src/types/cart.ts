import type { Product } from "./product";

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  subTotal: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}