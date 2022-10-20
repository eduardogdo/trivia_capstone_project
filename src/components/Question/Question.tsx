import TriviaQuestionResponse from "../../models/TriviaQuestionResponse";
import "./Question.css";

interface Props {
  question: TriviaQuestionResponse;
  questionNumber: number;
  moveToNextQuestion: () => void;
}

const Question = ({ question, questionNumber, moveToNextQuestion }: Props) => {
  console.log(question);
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
        <button key={index} style={{ margin: "10px" }}>
          {value}
        </button>
      ))}
      {questionNumber < 5 && (
        <button onClick={moveToNextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Question;
