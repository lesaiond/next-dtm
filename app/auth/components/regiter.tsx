"use client"
import { useAuthStore } from "@/store/useAuthStore";
import { RegisterForm } from "./forms/register-form";
import { motion } from "framer-motion";

export default function Registration() {
  const {setForm } = useAuthStore();
  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className="p-6 rounded-2xl w-full flex flex-col gap-6 shadow bg-background border max-w-[520px] mx-auto"
    >
      <h2 className="text-xl font-semibold text-center mb-4">Register</h2>
      <RegisterForm />
      <span className="text-center font-medium">
        Have an account?{" "}
        <strong onClick={() => setForm("login")} className="hover:text-secondary transition-colors cursor-pointer">
          
          Log in
        </strong>
      </span>
    </motion.div>
  );
}
