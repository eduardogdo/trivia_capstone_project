import { createContext } from "react";
import Score from "../models/ScoreModel";

interface QuestionContextModel {
  score: Score;
  addScore: (newScore: Score) => void;
}

const defaultValues: QuestionContextModel = {
  score: {
    username: "",
    score: 0,
    id: 0,
  },
  addScore: (newScore: Score) => {},
};

const QuestionContext = createContext(defaultValues);

export default QuestionContext;
