import { ReactNode, useState } from "react";
import Score from "../models/ScoreModel";
import QuestionContext from "./QuestionContext";

interface Props {
  children: ReactNode;
}

const QuestionContextProvider = ({ children }: Props) => {
  const [score, setScore] = useState<Score>({
    username: "",
    score: 0,
    id: 0,
    _id: "",
  });
  const addScore = (score: Score): void => {
    setScore(score);
  };

  return (
    <QuestionContext.Provider value={{ score, addScore }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
