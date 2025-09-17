import { UserRole } from './auth';

export interface User {
  id: number;
  name: string;
  email: string;
  role?: UserRole;
}