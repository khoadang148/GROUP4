import axios from "axios";
import {
  FETCH_INSTRUCTORS_FAILURE,
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
} from "../actionType";

export const getAllInstructor = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_INSTRUCTORS_REQUEST });
    try {
      const response = await axios.get("http://localhost:3001/users");
      const instructors = response.data.filter(
        (user) => user.role === "teacher"
      );
      dispatch({ type: FETCH_INSTRUCTORS_SUCCESS, payload: instructors });
    } catch (error) {
      dispatch({ type: FETCH_INSTRUCTORS_FAILURE, payload: error.message });
    }
  };
};
