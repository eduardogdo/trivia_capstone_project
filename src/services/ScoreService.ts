import axios from "../utils/api.client";
import Score from "../models/ScoreModel";

export const setScore = (score: Score): Promise<any> => {
  let request = {
    username: score.username,
    score: score.score,
    id: score.id,
  };
  return axios.post("/score", request).then((response) => {
    return response.data;
  });
};

export const getScore = (): Promise<Score[]> => {
  return axios.get("/score").then((response) => {
    return response.data;
  });
};

export const deleteScore = (id: string): Promise<any> => {
  return axios.delete(`/score/${id}`).then((response) => {
    return response.data;
  });
};
