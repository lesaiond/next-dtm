"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { Login } from "./components/login";
import Registration from "./components/regiter";
import { Verification } from "./components/verification";
import { AnimatePresence } from "framer-motion";

export default function AuthorizationPage() {
  const { currentForm, setForm } = useAuthStore();

  return (
    <section className="h-full w-full bg-[rgb(255, 251, 248)] relative overflow-hidden">
      {/* Кнопки для переключения */}
      {/* <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setForm("login")}
          className={`px-4 py-2 rounded-md ${
            currentForm === "login" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setForm("register")}
          className={`px-4 py-2 rounded-md ${
            currentForm === "register"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setForm("verification")}
          className={`px-4 py-2 rounded-md ${
            currentForm === "verification"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Verification
        </button>
      </div> */}

      {/* Анимация переключения с помощью AnimatePresence */}
      <div className="mt-6 flex justify-center w-full">
        <AnimatePresence mode="wait">
          {currentForm === "login" && <Login />}
          {currentForm === "register" && <Registration />}
          {currentForm === "verification" && <Verification />}
        </AnimatePresence>
      </div>

      {/* Декоративные изображения */}
      <div className="bg-img">
        <img
          src="/autho__bg-img__right.png"
          alt="bg-decoration"
          className="absolute right-[30px] xl:right-16 top-[30%] xl:top-[24%] z-[-1] w-[32%]"
        />
        <img
          src="/autho__bg-img__left.png"
          alt="bg-decoration"
          className="absolute left-[130px] xl:left-[180px] top-[30%] xl:top-[24%] z-[-1] w-[26%]"
        />
      </div>

    </section>
  );
}
