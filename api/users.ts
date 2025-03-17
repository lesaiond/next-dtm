import api from "./axiosInstance";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/types/user";

export const registerUser = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  const response = await api.post("/users/register", data);
  return response.data;
};
export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post("/accounts/login", data);
  localStorage.setItem("token", response.data.token)
  return response.data;
};
