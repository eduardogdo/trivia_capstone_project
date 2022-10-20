import axios from "../utils/api.client";
import Score from "../models/ScoreModel";

export const setScore = (score: Score) => {
  return axios.post("/score", score).then((response) => {
    console.log(response);
  });
};
