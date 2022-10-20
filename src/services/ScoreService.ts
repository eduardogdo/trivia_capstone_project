import axios from "../utils/api.client";
import Score from "../models/ScoreModel";

const headers = {
  "x-apikey": "63509630626b9c747864ad82",
};

export const setScore = (score: Score) => {
  return axios.post("/score", score).then((response) => {
    console.log(response);
  });
};

export const getScore = (): Promise<Score[]> => {
  return axios
    .get("/score", {
      headers: headers,
    })
    .then((response) => {
      return response.data;
    });
};

export const deleteScore = (id: string): Promise<any> => {
  return axios
    .delete(`/score/${id}`, {
      headers: headers,
    })
    .then((response) => {
      return response.data;
    });
};
