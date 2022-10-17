import axios from "axios";
import TriviaQuestionResponse from "../models/TriviaQuestionResponse";

export const getTriviaQuestions = (
  categories: string[],
  difficulty: string
): Promise<TriviaQuestionResponse[]> => {
  let categoriesParam = categories
    ? `&categories=${encodeURIComponent(categories.toString())}`
    : "";
  return axios
    .get(
      `https://the-trivia-api.com/api/questions?limit=5${categoriesParam}&difficulty=${encodeURIComponent(
        difficulty
      )}`
    )
    .then((response) => {
      return response.data;
    });
};
