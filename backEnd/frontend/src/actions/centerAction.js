import axios from "axios";

import { GET_INFO, DELETE_PICTURE } from "./types";

//gets all the data
export const getInfo = () => dispatch => {
  axios
    .get("/pics/")
    .then(res => {
      dispatch({
        type: GET_INFO,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//delete entry
export const deletePicture = id => dispatch => {
  axios.delete(`/pics/${id}/`).then(res => {
    dispatch({
      type: DELETE_PICTURE,
      payload: id
    });
  });
};
