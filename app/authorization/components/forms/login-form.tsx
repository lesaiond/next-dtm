"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ✅ Схема валидации через Zod
const loginSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Пароль должен быть минимум 6 символов"),
});

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log("Вход:", data);
    setTimeout(() => setLoading(false), 2000); // Симуляция запроса
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 py-5">
      <div className="border w-full flex justify-between px-4 py-2 rounded-xl">
        <Input placeholder="Enter Email" type="email" className="border-0" {...register("email")} />
        <div className="border-2 p-4 rounded-full" />
      </div>
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <div className="border w-full flex justify-between items-center px-4 py-2 rounded-xl">
        <Input placeholder="Password" type="password" className="border-0" {...register("password")} />
        <div className="px-1 cursor-pointer text-sm">Hide</div>
      </div>
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <div className="pb-6 text-base">Having trouble signing in?</div>
      <Button className="text-foreground text-lg" type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
};
