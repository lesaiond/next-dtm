"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRegisterUser } from "@/hooks/useUsers";
import { RegisterRequest } from "@/types/user";
import { Input } from "@/components/ui/input";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    language: z.number(),
    role: z.number(),
    isActive: z.boolean(),
  });

export function RegisterForm() {
  const { mutate, isPending } = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      language: 0,
      role: 0,
      isActive: true,
    },
  });

  const onSubmit = (data: RegisterRequest) => {
    mutate(data);
    console.log(data);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-5">
      {/* Full Name */}
      <div className="border w-full flex justify-between px-4 py-2 rounded-xl">
        <Input
          type="text"
          placeholder="Full Name"
          className="border-0 w-full focus:outline-none"
          {...register("fullName")}
        />
        <div className="border-2 p-4 rounded-full" />
      </div>
      {errors.fullName && (
        <p className="text-red-500 text-sm">{errors.fullName.message}</p>
      )}

      {/* Email */}
      <div className="border w-full flex justify-between px-4 py-2 rounded-xl">
        <Input
          type="email"
          placeholder="Email"
          className="border-0 w-full focus:outline-none"
          {...register("email")}
        />
        <div className="border-2 p-4 rounded-full" />
      </div>
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      {/* Password */}
      <div className="border w-full flex justify-between px-4 py-2 rounded-xl">
        <Input
          type="password"
          placeholder="Password"
          className="border-0 w-full focus:outline-none"
          {...register("password")}
        />
        <div className="border-2 p-4 rounded-full" />
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      {/* Language */}
      {/* <div className="border w-full flex justify-between px-4 py-2 rounded-xl">
        <Input
          type="number"
          placeholder="Language (0 - English)"
          className="border-0 w-full focus:outline-none"
          {...register("language", { valueAsNumber: true })}
        />
        <div className="border-2 p-4 rounded-full" />
      </div>
      {errors.language && (
        <p className="text-red-500 text-sm">{errors.language.message}</p>
      )} */}

      {/* Role */}
      {/* <div className="border w-full flex justify-between px-4 py-2 rounded-xl">
        <Input
          type="number"
          placeholder="Role (0 - Admin)"
          className="border-0 w-full focus:outline-none"
          {...register("role", { valueAsNumber: true })}
        />
        <div className="border-2 p-4 rounded-full" />
      </div>
      {errors.role && (
        <p className="text-red-500 text-sm">{errors.role.message}</p>
      )} */}

      {/* IsActive */}
      <div className="flex items-center space-x-2">
        <Input
          type="checkbox"
          {...register("isActive")}
          id="isActive"
          className="w-4 h-4"
        />
        <label htmlFor="isActive" className="text-sm">
          Is Active
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary py-2 rounded-2xl"
        disabled={isPending}
      >
        {isPending ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
