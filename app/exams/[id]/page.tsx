"use client";

import { useState } from "react";
import { QuizeCard } from "@/components/quize-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { QuizResults } from "@/components/quiz-results";
import BackButton from "@/components/ui/back-button";

export default function Exam() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    handleNext(); // Автоматически переходим к следующему вопросу после ответа
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getResults = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) correct++;
    });
    return { correct, incorrect: questions.length - correct };
  };

  if (showResults) {
    return (
      <QuizResults
        results={getResults()}
        totalQuestions={questions.length}
        onRestart={() => {
          setCurrentQuestion(0);
          setAnswers(Array(questions.length).fill(null));
          setShowResults(false);
        }}
      />
    );
  }

  return (
    <div className="w-full h-full p-5 bg-[url(/Light.png)] bg-contain rounded-3xl">
      <BackButton/>
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
          {currentQuestion + 1}/{questions.length}
        </span>
      </div>
      <QuizeCard
        key={questions[currentQuestion].id}
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        id={questions[currentQuestion].id}
        onAnswer={handleAnswer}
        selectedOption={answers[currentQuestion]}
      />
      <div className="flex justify-between mt-4">
        <Button onClick={handlePrevious} disabled={currentQuestion === 0}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          <div className="550:block hidden">Предыдущий</div>
        </Button>
        <Button onClick={handleNext}>
          <div className="550:block hidden">
            {currentQuestion === questions.length - 1
              ? "Завершить"
              : "Следующий"}{" "}
          </div>
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Hemingway", "Tolstoy", "Austen"],
    correctAnswer: "Shakespeare",
  },
  {
    id: 3,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 5,
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Van Gogh", "Picasso", "Rembrandt"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 6,
    question: "What is the largest mammal?",
    options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    id: 7,
    question: "How many continents are there?",
    options: ["7", "5", "6", "8"],
    correctAnswer: "7",
  },
  {
    id: 8,
    question: "Who discovered gravity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo", "Darwin"],
    correctAnswer: "Isaac Newton",
  },
  {
    id: 9,
    question: "Which gas do plants use for photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    id: 10,
    question: "What is the hardest natural substance?",
    options: ["Diamond", "Gold", "Iron", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    id: 11,
    question: "Which is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
  {
    id: 12,
    question: "How many sides does a hexagon have?",
    options: ["6", "5", "7", "8"],
    correctAnswer: "6",
  },
  {
    id: 13,
    question: "What is the square root of 144?",
    options: ["12", "10", "14", "16"],
    correctAnswer: "12",
  },
  {
    id: 14,
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    id: 15,
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Edison", "Tesla", "Marconi"],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    id: 16,
    question: "Which country is famous for the Great Wall?",
    options: ["China", "India", "Japan", "Korea"],
    correctAnswer: "China",
  },
  {
    id: 17,
    question: "What is the smallest prime number?",
    options: ["2", "1", "3", "5"],
    correctAnswer: "2",
  },
  {
    id: 18,
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "H2SO4", "CO2"],
    correctAnswer: "NaCl",
  },
  {
    id: 19,
    question: "Who was the first president of the USA?",
    options: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "John Adams",
    ],
    correctAnswer: "George Washington",
  },
  {
    id: 20,
    question: "Which organ pumps blood in the human body?",
    options: ["Heart", "Liver", "Lungs", "Kidney"],
    correctAnswer: "Heart",
  },
  {
    id: 21,
    question: "What is the largest ocean on Earth?",
    options: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correctAnswer: "Pacific",
  },
  {
    id: 22,
    question: "What is the boiling point of water in Celsius?",
    options: ["100°C", "90°C", "110°C", "80°C"],
    correctAnswer: "100°C",
  },
  {
    id: 23,
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Marie Curie", "Pasteur", "Newton"],
    correctAnswer: "Alexander Fleming",
  },
  {
    id: 24,
    question: "What is the speed of light?",
    options: ["299,792 km/s", "150,000 km/s", "1,000,000 km/s", "500,000 km/s"],
    correctAnswer: "299,792 km/s",
  },
  {
    id: 25,
    question: "How many bones are in the human body?",
    options: ["206", "205", "210", "199"],
    correctAnswer: "206",
  },
  {
    id: 26,
    question: "Which planet is closest to the sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    id: 27,
    question: "Who was the first person to walk on the moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    correctAnswer: "Neil Armstrong",
  },
  {
    id: 28,
    question: "What is the largest land animal?",
    options: ["Elephant", "Rhino", "Giraffe", "Hippo"],
    correctAnswer: "Elephant",
  },
  {
    id: 29,
    question: "Which country has the most population?",
    options: ["China", "India", "USA", "Russia"],
    correctAnswer: "China",
  },
  {
    id: 30,
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Lead", "Gold", "Silver"],
    correctAnswer: "Mercury",
  },
];
