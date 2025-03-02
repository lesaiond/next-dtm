// store/quizStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ExamResult {
  completed: boolean;
  answers: (string | null)[];
  results?: {
    correct: number;
    incorrect: number;
    totalQuestions: number;
  };
  completedAt?: string; // Дата завершения теста
}

export interface ExamData {
  id: string;
  title: string;
  questions: Question[];
}

interface QuizState {
  // Текущий экзамен
  currentExamId: string | null;
  currentQuestion: number;
  // Хранилище всех экзаменов
  exams: Record<string, ExamData>;
  // История результатов для каждого экзамена
  examHistory: Record<string, ExamResult>;
  
  // Методы для управления состоянием
  setCurrentExamId: (id: string) => void;
  setCurrentQuestion: (index: number) => void;
  setAnswer: (questionIndex: number, answer: string) => void;
  startExam: (examId: string) => void;
  resetExam: (examId: string) => void;
  completeExam: (examId: string) => void;
  isExamCompleted: (examId: string) => boolean;
  getExamResults: (examId: string) => { correct: number; incorrect: number; totalQuestions: number } | null;
  
  // Методы для управления экзаменами
  addOrUpdateExam: (exam: ExamData) => void;
  loadDefaultExams: () => void;
}

// Пример экзаменов по умолчанию
const defaultExams: Record<string, ExamData> = {
  "1": {
    id: "1",
    title: "Общие знания",
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris",
      },
      // Другие вопросы...
    ]
  },
  "2": {
    id: "2",
    title: "Наука",
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O",
      },
      // Другие вопросы...
    ]
  }
  // Можно добавить больше экзаменов
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      currentExamId: null,
      currentQuestion: 0,
      exams: {},
      examHistory: {},
      
      setCurrentExamId: (id) => set({ currentExamId: id }),
      
      setCurrentQuestion: (index) => set({ currentQuestion: index }),
      
      setAnswer: (questionIndex, answer) => {
        const { currentExamId, examHistory } = get();
        
        if (!currentExamId) return;
        
        const currentHistory = examHistory[currentExamId] || { 
          completed: false, 
          answers: Array(get().exams[currentExamId]?.questions.length || 0).fill(null) 
        };
        
        const newAnswers = [...currentHistory.answers];
        newAnswers[questionIndex] = answer;
        
        set({
          examHistory: {
            ...examHistory,
            [currentExamId]: {
              ...currentHistory,
              answers: newAnswers
            }
          }
        });
      },
      
      startExam: (examId) => {
        const { examHistory, exams } = get();
        const exam = exams[examId];
        
        if (!exam) return;
        
        // Если экзамен уже существует в истории, но не завершен, используем его
        // Иначе создаем новую запись
        const existingHistory = examHistory[examId];
        
        if (!existingHistory || existingHistory.completed) {
          set({
            currentExamId: examId,
            currentQuestion: 0,
            examHistory: {
              ...examHistory,
              [examId]: {
                completed: false,
                answers: Array(exam.questions.length).fill(null)
              }
            }
          });
        } else {
          // Продолжаем незавершенный экзамен
          set({
            currentExamId: examId,
            currentQuestion: 0,
          });
        }
      },
      
      resetExam: (examId) => {
        const { examHistory, exams } = get();
        const exam = exams[examId];
        
        if (!exam) return;
        
        set({
          currentQuestion: 0,
          examHistory: {
            ...examHistory,
            [examId]: {
              completed: false,
              answers: Array(exam.questions.length).fill(null)
            }
          }
        });
      },
      
      completeExam: (examId) => {
        const { examHistory, exams } = get();
        const exam = exams[examId];
        const currentHistory = examHistory[examId];
        
        if (!exam || !currentHistory) return;
        
        // Вычисляем результаты
        const answers = currentHistory.answers;
        let correct = 0;
        
        answers.forEach((answer, index) => {
          if (answer === exam.questions[index]?.correctAnswer) correct++;
        });
        
        const results = {
          correct,
          incorrect: exam.questions.length - correct,
          totalQuestions: exam.questions.length
        };
        
        set({
          examHistory: {
            ...examHistory,
            [examId]: {
              ...currentHistory,
              completed: true,
              results,
              completedAt: new Date().toISOString()
            }
          }
        });
      },
      
      isExamCompleted: (examId) => {
        const { examHistory } = get();
        return !!examHistory[examId]?.completed;
      },
      
      getExamResults: (examId) => {
        const { examHistory } = get();
        return examHistory[examId]?.results || null;
      },
      
      addOrUpdateExam: (exam) => {
        const { exams } = get();
        set({
          exams: {
            ...exams,
            [exam.id]: exam
          }
        });
      },
      
      loadDefaultExams: () => {
        set({ exams: defaultExams });
      }
    }),
    {
      name: 'exams-history-storage', // название для localStorage
    }
  )
);

// Инициализация данных по умолчанию при первом использовании
if (typeof window !== 'undefined') {
  // Проверяем, существуют ли уже данные в хранилище
  const existingState = localStorage.getItem('exams-history-storage');
  if (existingState) {
    const state = JSON.parse(existingState);
    if (Object.keys(state.state.exams || {}).length === 0) {
      // Загружаем экзамены по умолчанию
      useQuizStore.getState().loadDefaultExams();
    }
  } else {
    // Первый запуск, загружаем экзамены по умолчанию
    useQuizStore.getState().loadDefaultExams();
  }
}