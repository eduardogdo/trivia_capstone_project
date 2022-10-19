import { useState } from "react";
import TriviaQuestionResponse from "../../models/TriviaQuestionResponse";
import { getTriviaQuestions } from "../../services/TriviaService";
import Filter from "../Filter/Filter";
import Question from "../Question/Question";
import "./Main.css";

const Main = () => {
  const [questions, setQuestions] = useState<TriviaQuestionResponse[]>([
    {
      category: "Music",
      id: "622a1c397cc59eab6f950c9e",
      options: ["The Rolling Stones", "McFly", "Delirious?", "Depeche Mode"],
      correctAnswer: "The Rolling Stones",
      incorrectAnswers: ["McFly", "Delirious?", "Depeche Mode"],
      question:
        "Which English rock band released the album 'Exile on Main St.'?",
      difficulty: "hard",
    },
    {
      category: "Music",
      id: "622a1c397cc59eab6f950d5a",
      options: [
        "Simon & Garfunkel",
        "MercyMe",
        "Three 6 Mafia",
        "The Velvet Underground",
      ],
      correctAnswer: "Simon & Garfunkel",
      incorrectAnswers: ["MercyMe", "Three 6 Mafia", "The Velvet Underground"],
      question: "Which band includes 'Paul Simon'?",
      difficulty: "easy",
    },
    {
      category: "Music",
      id: "622a1c357cc59eab6f94ff51",
      options: ["Michael Jackson", "Nicki Minaj", "Neil Young", "Eric Clapton"],
      correctAnswer: "Michael Jackson",
      incorrectAnswers: ["Nicki Minaj", "Neil Young", "Eric Clapton"],
      question:
        "Which American singer released the song 'Wanna Be Startin' Somethin''?",
      difficulty: "easy",
    },
    {
      category: "Music",
      id: "622a1c397cc59eab6f950d85",
      options: ["Rammstein", "Cascada", "Blue System", "Scorpions"],
      correctAnswer: "Rammstein",
      incorrectAnswers: ["Cascada", "Blue System", "Scorpions"],
      question: "Which band includes 'Till Lindemann'?",
      difficulty: "hard",
    },
    {
      category: "Music",
      id: "6250647be12f6dec240bdfb6",
      options: ["Lou Bega", "Rockwell", "K-Ci & JoJo", "Big Country"],
      correctAnswer: "Lou Bega",
      incorrectAnswers: ["Rockwell", "K-Ci & JoJo", "Big Country"],
      question:
        "'Mambo No. 5 (A Little Bit Of...)' was a one hit wonder in 1999 by which artist?",
      difficulty: "medium",
    },
  ]);

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
      <Question
        question={questions[questionNumber]}
        moveToNextQuestion={moveToNextQuestion}
      />
    </div>
  );
};

export default Main;
