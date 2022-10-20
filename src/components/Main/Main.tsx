import { useState } from "react";
import TriviaQuestionResponse from "../../models/TriviaQuestionResponse";
import { getTriviaQuestions } from "../../services/TriviaService";
import Filter from "../Filter/Filter";
import Question from "../Question/Question";
import "./Main.css";

const Main = () => {
  const [questions, setQuestions] = useState<TriviaQuestionResponse[]>([]);

  const [questionNumber, setQuestionNumer] = useState(0);

  const handleFilter = (categories: string, difficulty: string) => {
    getTriviaQuestions(categories, difficulty).then(
      (resp: TriviaQuestionResponse[]) => {
        setQuestions(resp);
      }
    );
  };

  const moveToNextQuestion = () => {
    setQuestionNumer(questionNumber < 5 ? questionNumber + 1 : -1);
  };

  return (
    <div className="Main">
      <Filter onFilter={handleFilter} />
      {questions && questions.length > 0 && questionNumber >= 0 && (
        <Question
          question={questions[questionNumber]}
          questionNumber={questionNumber + 1}
          moveToNextQuestion={moveToNextQuestion}
        />
      )}
    </div>
  );
};

export default Main;
