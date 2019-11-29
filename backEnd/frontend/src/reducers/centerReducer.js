import { GET_INFO } from "../actions/types.js";
//import { stat } from "fs";

const initialState = {
  testObjects: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        testObjects: action.payload
      };
    default:
      return state;
  }
}
