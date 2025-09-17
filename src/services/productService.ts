import api from './api';
import { type Product, type ProductRequest, type ProductFilters } from '../types/product';

export const productService = {
  getAll: async (filters?: ProductFilters): Promise<Product[]> => {
    const params = new URLSearchParams();
    
    if (filters?.categoryId) params.append('categoryId', filters.categoryId.toString());
    if (filters?.name) params.append('name', filters.name);
    
    const response = await api.get<Product[]>(`/api/products?${params.toString()}`);
    return response.data;
  },

  getById: async (id: number): Promise<Product> => {
    const response = await api.get<Product>(`/api/products/${id}`);
    return response.data;
  },

  getAvailable: async (): Promise<Product[]> => {
    const response = await api.get<Product[]>('/api/products/available');
    return response.data;
  },

  create: async (product: ProductRequest): Promise<Product> => {
    const response = await api.post<Product>('/api/products', product);
    return response.data;
  },

  update: async (id: number, product: ProductRequest): Promise<Product> => {
    const response = await api.put<Product>(`/api/products/${id}`, product);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/api/products/${id}`);
  },
};