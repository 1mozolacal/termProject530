import { GET_INFO } from "../actions/types.js";

const initalState = {
  object: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        object: action.payload
      };
    default:
      return state;
  }
}
