import { GET_USER } from "./types";
import axios from "axios";

// Get User Profile
export const getUser = USERNAME => dispatch => {
  axios
    .get(`https://api.github.com/users/${USERNAME}`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response.data));
};
