"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Tooltip } from "./ui/tooltip";
import { AnimatedScore, ResultConfetti } from './result-animate';

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
  const chartData = [
    { name: 'Правильно', value: results.correct, fill: '#22c55e' },
    { name: 'Неправильно', value: results.incorrect, fill: '#ef4444' }
  ];
  
  const score = Math.round((results.correct / totalQuestions) * 100);
  let achievement = '';
  let achievementColor = '';
  
  if (score >= 90) {
    achievement = 'Отлично!';
    achievementColor = 'text-emerald-500';
  } else if (score >= 70) {
    achievement = 'Хорошо!';
    achievementColor = 'text-blue-500';
  } else if (score >= 50) {
    achievement = 'Неплохо';
    achievementColor = 'text-amber-500';
  } else {
    achievement = 'Попробуйте еще';
    achievementColor = 'text-rose-500';
  }
  
  return (
    <div className="mx-auto w-full flex flex-col items-center gap-6 rounded-2xl px-8 py-10 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-md shadow-xl border border-primary/10 max-w-[500px]">
      <ResultConfetti score={results.correct} total={totalQuestions} />
      
      <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-4 border-background">
        <div className="text-center">
          <div className={`text-4xl font-bold ${achievementColor}`}>{score}%</div>
          <div className={`text-sm font-medium ${achievementColor}`}>{achievement}</div>
        </div>
      </div>
      
      <div className="flex justify-around w-full gap-4">
        <AnimatedScore value={results.correct} total={totalQuestions} label="Правильно" color="text-emerald-500" />
        <AnimatedScore value={results.incorrect} total={totalQuestions} label="Неправильно" color="text-rose-500" />
        <AnimatedScore value={totalQuestions} total={totalQuestions} label="Всего вопросов" color="text-blue-500" />
      </div>
      
      <div className="w-full h-36 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical">
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="value" radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
        <Button onClick={onRestart} className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
          Начать заново
        </Button>
        <Button variant="outline" className="flex-1 border-primary/30 hover:bg-primary/5">
          Поделиться результатом
        </Button>
      </div>
    </div>
  );
};
