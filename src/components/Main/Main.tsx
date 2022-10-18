import { useState } from "react";
import TriviaQuestionResponse from "../../models/TriviaQuestionResponse";
import { getTriviaQuestions } from "../../services/TriviaService";
import Filter from "../Filter/Filter";
import "./Main.css";

const Main = () => {
  const [questions, setQuestions] = useState<TriviaQuestionResponse[]>();

  const handleFilter = (categories: string, difficulty: string) => {
    getTriviaQuestions(categories, difficulty).then(
      (resp: TriviaQuestionResponse[]) => {
        setQuestions(resp);
      }
    );
  };

  return (
    <div className="Main">
      <Filter onFilter={handleFilter} />
    </div>
  );
};

export default Main;
