export default interface TriviaQuestionResponse {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  difficulty: string;
}
