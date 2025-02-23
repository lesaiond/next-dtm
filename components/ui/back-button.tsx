"use client";
import { ChevronLeft } from "lucide-react";
import { Button } from "./button";

export default function BackButton() {
  return (
    <Button variant={"outline"} className="group flex justify-center px-0 pl-2 pr-[24px]" onClick={() => window.history.back()}>
      <ChevronLeft size={40} className="ml-2 h-4 w-4 group-hover:-translate-x-1" /> Назад
    </Button>
  );
}
