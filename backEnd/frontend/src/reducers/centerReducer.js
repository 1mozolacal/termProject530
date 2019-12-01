import { GET_INFO, DELETE_PICTURE, MAKE_PICTURE } from "../actions/types.js";

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
    case DELETE_PICTURE:
      return {
        ...state,
        object: state.object.filter(item => item.id !== action.payload)
      };
    case MAKE_PICTURE:
      return {
        ...state,
        object: [...state.object, action.payload]
      };
    default:
      return state;
  }
}
