import axios from "axios";
import TriviaQuestionResponse from "../models/TriviaQuestionResponse";
import TriviaCategory from "./TriviaCategory";

export const getTriviaQuestions = (
  categories: string | undefined,
  difficulty: string
): Promise<TriviaQuestionResponse[]> => {
  let categoriesParam = categories
    ? `&categories=${encodeURIComponent(categories)}`
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

export const getCategories = (): Promise<TriviaCategory[]> => {
  return axios
    .get(`https://the-trivia-api.com/api/categories`)
    .then((response) => {
      const categories: TriviaCategory[] = [];
      Object.keys(response.data).forEach((key) => {
        categories.push({
          name: key,
          value: response.data[key],
        });
      });
      return categories;
    });
};
