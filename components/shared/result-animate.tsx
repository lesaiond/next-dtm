"use client"
import React from 'react';
import { Progress } from "../ui/progress";
import confetti from "canvas-confetti";

interface AnimatedScoreProps {
  value: number;
  total: number;
  label: string;
  color?: string;
}

interface ResultConfettiProps {
  score: number;
  total: number;
}


export const AnimatedScore: React.FC<AnimatedScoreProps> = ({ value, total, label, color }) => {
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setScore(value);
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-xl">
      <span className={`text-3xl font-bold ${color}`}>{score}</span>
      <Progress value={(value / total) * 100} className="h-2 w-24 mt-2" />
      <span className="text-sm text-muted-foreground mt-1">{label}</span>
    </div>
  );
};

export const ResultConfetti: React.FC<ResultConfettiProps> = ({ score, total }) => {
  React.useEffect(() => {
    if (score / total >= 0.7) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [score, total]);

  return null;
};
