import { Button } from "@/components/ui/button";
import ActionButtons from "./action-buttons";

interface QuizResultsProps {
  results: { correct: number; incorrect: number };
  totalQuestions: number;
  onRestart: () => void;
}

export const QuizResults = ({
  results,
  totalQuestions,
  onRestart,
}: QuizResultsProps) => {
  return (
    <div className="mx-auto w-full flex flex-col gap-5 rounded-2xl px-12 py-10 shadow-2xl max-w-[450px]">
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-[45%]">
          <span className="text-secondary text-xl">100%</span>
          <span className="text-muted-foreground text-md">Completation</span>
        </div>
        <div className="flex flex-col w-[45%]">
          <span className="text-secondary text-xl">{totalQuestions}</span>
          <span className="text-muted-foreground text-md">Total questions</span>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-[45%]">
          <span className="text-chart-1 text-xl">{results.correct}</span>
          <span className="text-muted-foreground text-md">Correct</span>
        </div>
        <div className="flex flex-col w-[45%]">
          <span className="text-destructive text-xl">{results.incorrect}</span>
          <span className="text-muted-foreground text-md">Wrong</span>
        </div>
      </div>
      <ActionButtons />
      <Button onClick={onRestart} className="mt-4">
        Начать заново
      </Button>
    </div>
  );
};
