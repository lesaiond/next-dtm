export async function fetchExamQuestions(examId: string) {
  try {
    const response = await fetch(`/api/exams/${examId}/questions`);
    if (!response.ok) {
      throw new Error("Не удалось загрузить вопросы");
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки вопросов:", error);
    return [];
  }
}
