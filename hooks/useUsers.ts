import { useMutation } from '@tanstack/react-query';
import { loginUser, registerUser } from '@/api/users';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@/types/user';
import { useAuthStore } from '@/store/useAuthStore';

export const useRegisterUser = () => {
  const {setForm } = useAuthStore();
  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: registerUser,
    onError: (error) => {
      console.error('Registration failed:', error.message);
      alert(`Registration failed: ${error.message}`);
    },
    onSuccess: (data) => {
      setForm("verification")
      alert(`User registered successfully: ${data.data?.fullName}`);
    },
  });
};

export const useLoginUser = () => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: loginUser,
    onError: (error) => {
      console.error('Login failed:', error.message);
      alert(`Login failed: ${error.message}`);
    },
    onSuccess: (data) => {
      alert(`User login successfully: ${data}`);
    },
  });
};
