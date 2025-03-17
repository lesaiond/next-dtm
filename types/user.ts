export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  language: number;
  role: number;
  isActive: boolean;
}

export interface RegisterResponse {
  code: number;
  message: string;
  data: {
    id: number;
    fullName: string;
    email: string;
    language: number;
    role: number;
    isActive: boolean;
  } | null;
}

export interface LoginRequest {
  email: string;
  password: string;
  language: number;
}

export interface LoginResponse {
  token: string
}
