"use client"
import { RotateCcw, Eye, Share2, FileText, Home, Star } from "lucide-react";
import Link from "next/link";

export default function ActionButtons() {
  const buttons = [
    {
      icon: <RotateCcw size={24} />,
      label: "Play Again",
      color: "bg-blue-500",
    },
    { icon: <Eye size={24} />, label: "Review Answer", color: "bg-[#ffc477]" },
    {
      icon: <Share2 size={24} />,
      label: "Share Score",
      color: "bg-purple-500",
    },
    {
      icon: <FileText size={24} />,
      label: "Generate PDF",
      color: "bg-cyan-500",
    },
    { icon: <Home size={24} />, label: "Home", color: "bg-pink-500" },
    { icon: <Star size={24} />, label: "Leaderboard", color: "bg-gray-500" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={`flex flex-col items-center justify-center `}
          >
          <Link href={"/"} className="flex flex-col items-center">
            <div className={`rounded-full p-3 ${btn.color} text-white shadow-md hover:opacity-80`}>{btn.icon}</div>
            <span className="text-xs mt-2">{btn.label}</span>
          </Link>
        </button>
      ))}
    </div>
  );
}
