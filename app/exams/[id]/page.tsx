// app/exams/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import { QuizProgress } from "@/components/quiz-progress";
import { QuizeCard } from "@/components/quize-card";
import { QuizNavigation } from "@/components/quiz-navigation";
import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";

export default function Exam() {
  const router = useRouter();
  const params = useParams();
  const examId = params.id as string;
  const [isLoading, setIsLoading] = useState(true);
  
  const { 
    exams,
    currentQuestion, 
    examHistory,
    setCurrentExamId,
    setCurrentQuestion,
    setAnswer,
    startExam,
    completeExam,
    isExamCompleted
  } = useQuizStore();

  // Инициализация при загрузке
  useEffect(() => {
    // Проверяем, существует ли такой экзамен
    if (!exams[examId]) {
      router.push('/exams'); // Перенаправляем на список экзаменов, если ID не существует
      return;
    }
    
    // Устанавливаем текущий экзамен
    setCurrentExamId(examId);
    
    // Проверяем, завершен ли уже этот экзамен
    const completed = isExamCompleted(examId);
    
    if (completed) {
      // Если экзамен уже завершен, показываем результаты
      router.push(`/exams/${examId}/results`);
      return;
    }
    
    // Запускаем экзамен (если он еще не завершен)
    startExam(examId);
    setIsLoading(false);
  }, [examId, exams, setCurrentExamId, isExamCompleted, router, startExam]);

  // Если экзамена нет или идет загрузка
  if (isLoading || !exams[examId]) {
    return <div className="flex justify-center items-center h-screen">Загрузка...</div>;
  }

  const exam = exams[examId];
  const examResult = examHistory[examId] || { answers: Array(exam.questions.length).fill(null), completed: false };
  
  const handleNext = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Завершаем экзамен
      completeExam(examId);
      router.push(`/exams/${examId}/results`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (answer: string) => {
    setAnswer(currentQuestion, answer);
    handleNext(); // Автоматически переходим к следующему вопросу после ответа
  };

  const currentQuestionData = exam.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / exam.questions.length) * 100;

  return (
    <div className="w-full h-full p-5 bg-[url(/Light.png)] bg-contain rounded-3xl">
      <BackButton />
      <h1 className="text-2xl font-bold text-center mb-4">{exam.title}</h1>
      
      <QuizProgress 
        currentQuestion={currentQuestion + 1} 
        totalQuestions={exam.questions.length} 
        progress={progress} 
      />
      
      {currentQuestionData && (
        <QuizeCard
          key={currentQuestionData.id}
          question={currentQuestionData.question}
          options={currentQuestionData.options}
          id={currentQuestionData.id}
          onAnswer={handleAnswer}
          selectedOption={examResult.answers[currentQuestion]}
        />
      )}
      
      <QuizNavigation 
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentQuestion={currentQuestion}
        totalQuestions={exam.questions.length}
        disablePrevious={currentQuestion === 0}
      />
    </div>
  );
}