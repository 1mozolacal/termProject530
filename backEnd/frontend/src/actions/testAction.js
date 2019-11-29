import axios from "axios";
import { GET_INFO } from "./types";

//this is get info
export const getInfo = () => dispatch => {
  //talk to duc about interfacing with the backend
  //should be giving use a promise back
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
