import axios from "axios";
import TriviaQuestionResponse from "../models/TriviaQuestionResponse";
import TriviaCategory from "../models/TriviaCategory";

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
      response.data.forEach((item: TriviaQuestionResponse) => {
        item.options = [...item.incorrectAnswers, item.correctAnswer];
        shuffleArray(item.options);
      });
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

/**
 * reference: https://stackoverflow.com/a/12646864
 */
function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
