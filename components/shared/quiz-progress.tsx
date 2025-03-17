// components/quiz-progress.tsx
import React from "react";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
}

export function QuizProgress({ currentQuestion, totalQuestions, progress }: QuizProgressProps) {
  return (
    <div className="relative w-24 h-24 mx-auto mb-4 mt-calc50vh-20per bg-background rounded-full">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        <circle
          className="text-primary stroke-current"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray={`${progress * 2.51327} 251.327`}
          transform="rotate(-90 50 50)"
        ></circle>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
        {currentQuestion}/{totalQuestions}
      </span>
    </div>
  );
}
