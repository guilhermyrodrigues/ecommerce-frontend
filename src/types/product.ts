import type { Category } from "./category"

export interface Product {
    id: number
    name: string
    description: string
    price: number
    stock: number
    category: Category
}

export interface ProductRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
}

export interface ProductFilters {
  categoryId?: number;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
}