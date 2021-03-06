import { GET_USER } from "../components/actions/types";

const initialState = {
  user: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
