import { create } from 'zustand';

type AuthState = {
  currentForm: 'login' | 'register' | 'verification';
  setForm: (form: 'login' | 'register' | 'verification') => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  currentForm: 'login',
  setForm: (form) => set({ currentForm: form }),
}));
