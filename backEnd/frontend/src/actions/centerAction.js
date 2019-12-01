import axios from "axios";

import { GET_INFO, DELETE_PICTURE, ADD_PICTURE } from "./types";

//gets all the data
export const getInfo = () => dispatch => {
  axios
    .get("/api/pictures/")
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
  axios.delete(`/api/pictures/${id}/`).then(res => {
    dispatch({
      type: DELETE_PICTURE,
      payload: id
    });
  });
};

export const addPicture = object => dispatch => {
  axios
    .post("/api/pictures/", object)
    .then(res => {
      dispatch({
        type: ADD_PICTURE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
