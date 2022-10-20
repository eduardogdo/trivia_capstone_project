import axios from "../utils/api.client";
import Score from "../models/ScoreModel";

export const setScore = (score: Score) => {
  return axios.post("/score", score).then((response) => {
    console.log(response);
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
