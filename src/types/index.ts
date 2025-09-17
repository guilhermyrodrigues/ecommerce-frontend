// Exporta todos os tipos
export * from './auth';
export * from './product';
export * from './category';
export * from './order';
export * from './user';
export * from './cart';

// Tipos utilitários
export interface ApiResponse<T> {
  data?: T;
  message?: string;
  success: boolean;
  errors?: Record<string, string>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  status: number;
  message: string;
  timestamp: string;
  errors?: Record<string, string>;
}