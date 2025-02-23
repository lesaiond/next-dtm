"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ✅ Validation schema using Zod
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log("Registration data:", data);
    setTimeout(() => setLoading(false), 2000); // Simulate API request
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-5">
      <div className="border w-full flex justify-between px-4 py-2 rounded-xl">
        <Input type="text" placeholder="Name" className="border-0" {...register("name")} />
        <div className="border-2 p-4 rounded-full" />
      </div>
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

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

      <div className="border w-full flex justify-between items-center px-4 py-2 rounded-xl">
        <Input type="password" placeholder="Confirm Password" className="border-0" {...register("confirmPassword")} />
        <div className="border-2 p-4 rounded-full" />
      </div>
      {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

      <Button className="w-full text-foreground text-lg" type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
