import axios from "axios";
import {
  FETCH_ENROLLED_COURSES_FAILURE,
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_SUCCESS,
} from "../actionType";

export const getEnrolledCourses = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ENROLLED_COURSES_REQUEST });
    try {
      const response = await axios.get(
        `http://localhost:3001/users?id=${userId}`
      );
      const enrolledCourses = response.data[0].enrolledCourses;
      console.log(enrolledCourses);
      dispatch({
        type: FETCH_ENROLLED_COURSES_SUCCESS,
        payload: enrolledCourses,
      });
    } catch (error) {
      dispatch({ type: FETCH_ENROLLED_COURSES_FAILURE, error: error.message });
    }
  };
};
