import api from './api';
import { type LoginRequest, type RegisterRequest, type JwtResponse } from '../types/auth';

export const authService = {
  login: async (credentials: LoginRequest): Promise<JwtResponse> => {
    const response = await api.post<JwtResponse>('/auth/login', credentials);
    return response.data;
  },

  register: async (userData: RegisterRequest): Promise<void> => {
    await api.post('/auth/register', userData);
  },

  logout: (): void => {
    localStorage.removeItem('token');
    window.location.href = '/';
  },
};