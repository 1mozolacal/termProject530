import axios from "axios";

import { GET_INFO } from "./types";

export const getInfo = () => dispatch => {
  axios
    .get("/stocks/")
    .then(res => {
      dispatch({
        type: GET_INFO,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
