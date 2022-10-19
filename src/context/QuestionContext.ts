import { createContext } from "react";
import Score from "../models/ScoreModel";

interface QuestionContextModel {
  score: Score[];
  addScore: (newScore: Score) => void;
  deleteScore: (id: number) => void;
}

const defaultValues: QuestionContextModel = {
  score: [],
  addScore: (newScore: Score) => {},
  deleteScore: (id: number) => {},
};

const QuestionContext = createContext(defaultValues);

export default QuestionContext;
