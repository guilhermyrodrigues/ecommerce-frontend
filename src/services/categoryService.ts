import api from './api';
import { type Category, type CategoryRequest } from '../types/category';

export const categoryService = {
  getAll: async (): Promise<Category[]> => {
    const response = await api.get<Category[]>('/api/categories');
    return response.data;
  },

  getById: async (id: number): Promise<Category> => {
    const response = await api.get<Category>(`/api/categories/${id}`);
    return response.data;
  },

  create: async (category: CategoryRequest): Promise<Category> => {
    const response = await api.post<Category>('/api/categories', category);
    return response.data;
  },

  update: async (id: number, category: CategoryRequest): Promise<Category> => {
    const response = await api.put<Category>(`/api/categories/${id}`, category);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/api/categories/${id}`);
  },
};