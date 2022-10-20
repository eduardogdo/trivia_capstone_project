import { Button, Card, CardContent, TextField } from "@mui/material";
import { FormEvent, useContext, useState } from "react";
import QuestionContext from "../../context/QuestionContext";
import { setScore } from "../../services/ScoreService";
import "./UserName.css";

interface Props {
  onNewUser: () => void;
}

const UserName = ({ onNewUser }: Props) => {
  const { score, addScore } = useContext(QuestionContext);
  const [name, setName] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let newScore = { ...score };
    newScore.username = name;
    addScore(newScore);
  };

  const handleSaveScoreClick = () => {
    setScore(score).then((data) => {
      let scoreFromDb = { ...score };
      scoreFromDb._id = data._id;
      addScore(scoreFromDb);
      localStorage.setItem("user", JSON.stringify(scoreFromDb));
    });
  };

  const handleNewUserClick = () => {
    addScore({
      username: "",
      score: 0,
      id: 0,
      _id: "",
    });
    localStorage.removeItem("user");
    onNewUser();
  };

  return (
    <section className="UserName">
      <Card variant="outlined" className="card">
        <CardContent>
          <h2>Results</h2>
          <h4>Name: {score.username ?? "Insert your name"}</h4>
          <h5>Score: {score.score ?? "Respond some questions"}</h5>
          {!score.username ? (
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button variant="contained" type="submit" size={"large"}>
                Submit
              </Button>
            </form>
          ) : !score._id ? (
            <Button
              variant="contained"
              size={"large"}
              onClick={handleSaveScoreClick}
            >
              Save my score
            </Button>
          ) : (
            <Button
              variant="contained"
              size={"large"}
              onClick={handleNewUserClick}
            >
              New User
            </Button>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default UserName;
