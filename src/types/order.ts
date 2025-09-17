
import type { Product } from './product';
import type { User } from './user';

export interface Order {
  id: number;
  moment: string;
  status: OrderStatus;
  user: User;
  items: OrderItem[];
  total: number;
}

export interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
  subTotal: number;
}

export interface OrderRequest {
  items: OrderItemRequest[];
}

export interface OrderItemRequest {
  productId: number;
  quantity: number;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED'
}