import { Container, Grid } from "@mui/material";
import { useContext, useState } from "react";
import QuestionContext from "../../context/QuestionContext";
import TriviaQuestionResponse from "../../models/TriviaQuestionResponse";
import { setScore } from "../../services/ScoreService";
import { getTriviaQuestions } from "../../services/TriviaService";
import Filter from "../Filter/Filter";
import Question from "../Question/Question";
import UserName from "../UserName/UserName";
import "./Main.css";

const Main = () => {
  const [questions, setQuestions] = useState<TriviaQuestionResponse[]>([]);
  const { score } = useContext(QuestionContext);
  const [questionNumber, setQuestionNumer] = useState(0);

  const handleFilter = (categories: string, difficulty: string) => {
    getTriviaQuestions(categories, difficulty).then(
      (resp: TriviaQuestionResponse[]) => {
        setQuestions(resp);
        setQuestionNumer(0);
      }
    );
  };

  const moveToNextQuestion = () => {
    setQuestionNumer(questionNumber < 4 ? questionNumber + 1 : -1);

    if (questionNumber === 4) {
      console.log(score);
      setScore(score);
    }
  };

  return (
    <Container maxWidth={"xl"} className="Main">
      <Filter onFilter={handleFilter} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {questions && questions.length > 0 && questionNumber !== -1 ? (
            <Question
              question={questions[questionNumber]}
              moveToNextQuestion={moveToNextQuestion}
            />
          ) : (
            <>
              <p>Please find some questions</p>
            </>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {(questionNumber === -1 || score.username) && <UserName />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
