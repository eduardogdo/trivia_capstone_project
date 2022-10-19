import { useState } from "react";
import TriviaQuestionResponse from "../../models/TriviaQuestionResponse";
import { getTriviaQuestions } from "../../services/TriviaService";
import Filter from "../Filter/Filter";
import Question from "../Question/Question";
import "./Main.css";

const Main = () => {
  const [questions, setQuestions] = useState<TriviaQuestionResponse[]>([]);

  const [questionNumber, setQuestionNumer] = useState(1);

  const handleFilter = (categories: string, difficulty: string) => {
    getTriviaQuestions(categories, difficulty).then(
      (resp: TriviaQuestionResponse[]) => {
        setQuestions(resp);
      }
    );
  };

  const moveToNextQuestion = () => {
    setQuestionNumer(questionNumber + 1);
  };

  return (
    <div className="Main">
      <Filter onFilter={handleFilter} />
      {questions && questions.length > 0 && (
        <Question
          question={questions[questionNumber]}
          moveToNextQuestion={moveToNextQuestion}
        />
      )}
    </div>
  );
};

export default Main;
