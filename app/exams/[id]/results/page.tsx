// app/exams/[id]/results/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import { QuizResults } from "@/components/shared/quiz-results";
import BackButton from "@/components/ui/back-button";
import { FeedBack } from "@/components/shared/feedback";
import LeaderboardComponent from "@/components/shared/leader-board-component";

export default function ResultsPage() {
  const router = useRouter();
  const params = useParams();
  const examId = params.id as string;
  const [isLoading, setIsLoading] = useState(true);

  const { exams, examHistory, isExamCompleted, resetExam, getExamResults } =
    useQuizStore();

  useEffect(() => {
    // Проверяем, существует ли такой экзамен
    if (!exams[examId]) {
      router.push("/exams"); // Перенаправляем на список экзаменов, если ID не существует
      return;
    }

    // Проверяем, завершен ли уже этот экзамен
    const completed = isExamCompleted(examId);

    if (!completed) {
      // Если экзамен не завершен, перенаправляем на страницу экзамена
      router.push(`/exams/${examId}`);
      return;
    }

    setIsLoading(false);
  }, [examId, exams, isExamCompleted, router]);

  // Если экзамена нет или идет загрузка
  if (isLoading || !exams[examId]) {
    return (
      <div className="flex justify-center items-center h-screen">
        Загрузка...
      </div>
    );
  }

  const exam = exams[examId];
  const results = getExamResults(examId);

  if (!results) {
    return <div className="text-center p-8">Результаты не найдены</div>;
  }

  const handleRestart = () => {
    resetExam(examId);
    router.push(`/exams/${examId}`);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-background to-background/80 p-5 bg-[url('/pattern-bg.svg')] bg-fixed">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <button
            className="p-2 rounded-full hover:bg-primary/10"
            onClick={() => window.history.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-3xl font-bold text-center flex-1 mr-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {exam.title} - Результаты
          </h1>
        </div>
        <QuizResults
          results={{ correct: results.correct, incorrect: results.incorrect }}
          totalQuestions={results.totalQuestions}
          onRestart={handleRestart}
        />
        {examHistory[examId]?.completedAt && (
          <div className="text-center mt-6 text-muted-foreground backdrop-blur-sm bg-white/10 py-2 px-4 rounded-full inline-block mx-auto">
            Тест пройден:{" "}
            {new Date(examHistory[examId].completedAt).toLocaleString()}
          </div>
        )}
        <LeaderboardComponent/>

        <FeedBack />
      </div>
    </div>
  );
}
