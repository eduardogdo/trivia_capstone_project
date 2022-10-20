import { useContext, useEffect, useState } from "react";
import QuestionContext from "../../context/QuestionContext";
import TriviaQuestionResponse from "../../models/TriviaQuestionResponse";
import { setScore } from "../../services/ScoreService";
import "./Question.css";

interface Props {
  question: TriviaQuestionResponse;
  moveToNextQuestion: () => void;
}

const Question = ({ question, moveToNextQuestion }: Props) => {
  const { score, addScore } = useContext(QuestionContext);
  const [options, setOptions] = useState<string[]>([]);

  const answerQuestion = (answer: string) => {
    if (answer === question.correctAnswer) {
      score.score++;
      addScore(score);

      setScore(score);
    }

    moveToNextQuestion();
  };

  useEffect(
    function () {
      setOptions(shuffle(question.options));
    },
    [question.options]
  );

  const shuffle = (array: string[]) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <div className="Question">
      <p>
        <b>Question</b>: {question?.question}
      </p>
      <p>
        <b>Category</b>: {question?.category}
      </p>
      <h5>Choose the correction option from below:</h5>
      {question?.options?.map((value, index) => (
        <button
          onClick={() => answerQuestion(value)}
          key={index}
          style={{ margin: "10px" }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Question;
