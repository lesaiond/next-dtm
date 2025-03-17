"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginUser } from "@/hooks/useUsers";
import { CheckCircle, Eye, EyeOff } from "lucide-react"; // Добавил иконки для удобства

// ✅ Схема валидации через Zod
const loginSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Пароль должен быть минимум 6 символов"),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useLoginUser();

  // ✅ Отслеживание значений для валидации в реальном времени
  const emailValue = watch("email");
  const passwordValue = watch("password");

  // ✅ Проверка валидности
  const handleValidation = () => {
    setIsEmailValid(!errors.email && !!emailValue);
    setIsPasswordValid(!errors.password && !!passwordValue);
  };

  const onSubmit = async (data: any) => {
    mutate(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 py-5">
      {/* Email input */}
      <div
        className={`border w-full flex justify-between px-4 py-2 rounded-xl ${
          isEmailValid ? "border-green-500" : "border-gray-300"
        }`}
      >
        <Input
          placeholder="Enter Email"
          type="email"
          className="border-0 w-full"
          {...register("email", {
            onChange: handleValidation,
          })}
        />
        {/* ✅ Если валидация пройдена — показываем зеленую галочку */}
        {isEmailValid ? (
          <CheckCircle className="w-6 h-6 text-green-500" />
        ) : (
          <div className="border-2 p-4 rounded-full" />
        )}
      </div>
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      {/* Password input */}
      <div
        className={`border w-full flex justify-between items-center px-4 py-2 rounded-xl ${
          isPasswordValid ? "border-green-500" : "border-gray-300"
        }`}
      >
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          className="border-0 w-full"
          {...register("password", {
            onChange: handleValidation,
          })}
        />
        {/* ✅ Добавляем кнопку "Show/Hide" */}
        <div
          className="px-1 cursor-pointer text-sm"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </div>
      </div>
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <div className="pb-6 text-base">Having trouble signing in?</div>
      
      {/* ✅ Кнопка */}
      <Button className="text-foreground text-lg" type="submit" disabled={isPending}>
        {isPending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
};
