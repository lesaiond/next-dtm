"use client"
import { useAuthStore } from "@/store/useAuthStore";
import { LoginForm } from "./forms/login-form";
import { motion } from "framer-motion";

export const Login = () => {
  const { setForm } = useAuthStore();
  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className="p-6 rounded-2xl w-full flex flex-col gap-6 shadow bg-background border max-w-[100vw] md:max-w-[420px] lg:max-w-[42%] xl:max-w-[520px] mx-auto"
    >
      <h1 className="text-center">Agent Login</h1>
      <h6 className="text-center mx-auto max-w-80">
        Hi, Enter your details to get sign in to your account
      </h6>
      <LoginForm />
      <div className="flex items-center justify-center gap-3">
        <div className="w-6 h-1 border-t-2 border-foreground mt-[5px]" />
        <div className="text-base">Or Sign in with</div>
        <div className="w-6 h-1 border-t-2 border-foreground mt-[5px]" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="border-2 text-center px-4 py-3 w-full rounded-xl font-extrabold">
          Google
        </div>
        <div className="border-2 text-center px-4 py-3 w-full rounded-xl font-extrabold">
          Apple ID
        </div>
        <div className="border-2 text-center px-4 py-3 w-full rounded-xl font-extrabold">
          Facebook
        </div>
      </div>
      <span className="text-center font-medium">
        Don`t have an account?{" "}
        <strong
          onClick={() => setForm("register")}
          className="hover:text-secondary cursor-pointer"
        >
          {" "}
          Request Now
        </strong>
      </span>
    </motion.div>
  );
};
