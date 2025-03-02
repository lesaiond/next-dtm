
// components/quiz-navigation.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuizNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentQuestion: number;
  totalQuestions: number;
  disablePrevious: boolean;
}

export function QuizNavigation({ 
  onPrevious, 
  onNext, 
  currentQuestion, 
  totalQuestions,
  disablePrevious 
}: QuizNavigationProps) {
  return (
    <div className="flex justify-between mt-4">
      <Button onClick={onPrevious} disabled={disablePrevious}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        <div className="550:block hidden">Предыдущий</div>
      </Button>
      <Button onClick={onNext}>
        <div className="550:block hidden">
          {currentQuestion === totalQuestions - 1
            ? "Завершить"
            : "Следующий"}{" "}
        </div>
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}