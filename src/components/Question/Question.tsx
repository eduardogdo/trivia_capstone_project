import { useContext } from "react";
import QuestionContext from "../../context/QuestionContext";
import TriviaQuestionResponse from "../../models/TriviaQuestionResponse";
import "./Question.css";

interface Props {
  question: TriviaQuestionResponse;
  moveToNextQuestion: () => void;
}

const Question = ({ question, moveToNextQuestion }: Props) => {
  const { score, addScore } = useContext(QuestionContext);

  const answerQuestion = (answer: string) => {
    if (answer === question.correctAnswer) {
      score.score++;
      addScore(score);
    }

    moveToNextQuestion();
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
      <button onClick={moveToNextQuestion}>Next Question</button>
    </div>
  );
};

export default Question;
