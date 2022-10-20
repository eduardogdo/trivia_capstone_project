import { Button, Card, TextField } from "@mui/material";
import { FormEvent, useContext, useState } from "react";
import QuestionContext from "../../context/QuestionContext";
import "./UserName.css";

const UserName = () => {
  const { score, addScore } = useContext(QuestionContext);
  const [name, setName] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    score.username = name;
    addScore(score);
  };

  return (
    <section className="UserName">
      <Card variant="outlined" className="card">
        <h2>Results</h2>
        <h4>Name: {score.username ?? "Insert your name"}</h4>
        <h5>Score: {score.score ?? "Respond some questions"}</h5>
        {!score.username && (
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
        )}
      </Card>
    </section>
  );
};

export default UserName;
