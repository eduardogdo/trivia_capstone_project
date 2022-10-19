import { ReactNode, useState } from "react";
import Score from "../models/ScoreModel";
import QuestionContext from "./QuestionContext";

interface Props {
  children: ReactNode;
}

const QuestionContextProvider = ({ children }: Props) => {
  const [score, setScore] = useState<Score[]>([]);
  const addScore = (score: Score): void => {
    setScore((prev) => [...prev, score]);
  };
  const deleteScore = (id: number): void => {
    setScore((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  return (
    <QuestionContext.Provider value={{ score, addScore, deleteScore }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
