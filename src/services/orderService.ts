import api from './api';
import { type Order, type OrderRequest, OrderStatus } from '../types/order';

export const orderService = {
  getAll: async (): Promise<Order[]> => {
    const response = await api.get<Order[]>('/api/orders');
    return response.data;
  },

  getMyOrders: async (): Promise<Order[]> => {
    const response = await api.get<Order[]>('/api/orders/my-orders');
    return response.data;
  },

  getById: async (id: number): Promise<Order> => {
    const response = await api.get<Order>(`/api/orders/${id}`);
    return response.data;
  },

  create: async (order: OrderRequest): Promise<Order> => {
    const response = await api.post<Order>('/api/orders', order);
    return response.data;
  },

  updateStatus: async (id: number, status: OrderStatus): Promise<Order> => {
    const response = await api.patch<Order>(`/api/orders/${id}/status?status=${status}`);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/api/orders/${id}`);
  },
};