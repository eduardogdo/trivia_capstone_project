export default interface TriviaQuestionResponse {
  category: string;
  id: string;
  options: string[];
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  difficulty: string;
}
