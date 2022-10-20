import { useContext } from "react";
import QuestionContext from "../../context/QuestionContext";
import TriviaQuestionResponse from "../../models/TriviaQuestionResponse";
import "./Question.css";

interface Props {
  question: TriviaQuestionResponse;
  questionNumber: number;
  moveToNextQuestion: () => void;
}

<<<<<<< HEAD
const Question = ({ question, moveToNextQuestion }: Props) => {
  const { score, addScore } = useContext(QuestionContext);

  const answerQuestion = (answer: string) => {
    console.log(answer);
    console.log(question);
    if (answer === question.correctAnswer) {
      score.score++;
      addScore(score);
    }

    console.log(score);

    moveToNextQuestion();
  };
=======
const Question = ({ question, questionNumber, moveToNextQuestion }: Props) => {
  console.log(question);
>>>>>>> bbad27a (Hide 'Next Question' button and randomize options)
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
<<<<<<< HEAD
      {/* {questionNumber < 5 && (
        <button onClick={moveToNextQuestion}>Next Question</button>
      )} */}
=======
      {questionNumber < 5 && (
        <button onClick={moveToNextQuestion}>Next Question</button>
      )}
>>>>>>> bbad27a (Hide 'Next Question' button and randomize options)
    </div>
  );
};

export default Question;
