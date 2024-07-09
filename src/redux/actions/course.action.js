import axios from "axios";
import {
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_SUCCESS,
  FETCH_ENROLLED_COURSES_FAILURE,
  SEARCH_COURSES_REQUEST,
  SEARCH_COURSES_SUCCESS,
  SEARCH_COURSES_FAILURE,
} from "../actionType";

const API_URL = "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1";

export const getAllCourses = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ENROLLED_COURSES_REQUEST });

    try {
      const coursesResponse = await axios.get(`${API_URL}/courses`);
      // console.log(coursesResponse);
      dispatch({
        type: FETCH_ENROLLED_COURSES_SUCCESS,
        payload: coursesResponse.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ENROLLED_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};
export const getEnrolledCourses = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ENROLLED_COURSES_REQUEST });

    try {
      const userResponse = await axios.get(`${API_URL}/users/${userId}`);
      // console.log("user data", userResponse.data);
      const enrolledCoursesIds = userResponse.data.enrolledCourses.map(
        (course) => course.id
      );
      console.log("enrolled", enrolledCoursesIds);
      const coursesResponse = await axios.get(`${API_URL}/courses`, {
        params: { id: enrolledCoursesIds.join("") },
      });
      // console.log(coursesResponse);
      const filteredCourses = coursesResponse.data.filter((course) =>
        userResponse.data.enrolledCourses.includes(course.id)
      );
      dispatch({
        type: FETCH_ENROLLED_COURSES_SUCCESS,
        payload: filteredCourses,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ENROLLED_COURSES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const searchCourses = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_COURSES_REQUEST });
    try {
      const response = await axios.get(`${API_URL}/courses`, {
        params: { title: query },
      });
      console.log(response);
      dispatch({ type: SEARCH_COURSES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SEARCH_COURSES_FAILURE, error: error.message });
    }
  };
};
export const searchCoursesByInstructor = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_COURSES_REQUEST });
    try {
      const response = await axios.get(`${API_URL}/courses`, {
        params: { instructor: query },
      });
      dispatch({ type: SEARCH_COURSES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SEARCH_COURSES_FAILURE, payload: error.message });
    }
  };
};
export const createCourse = (courseData) => async (dispatch) => {
  dispatch({ type: "CREATE_COURSE_REQUEST" });
  try {
    const response = await axios.post(
      "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/courses",
      courseData
    );
    dispatch({ type: "CREATE_COURSE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "CREATE_COURSE_FAILURE", payload: error.message });
  }
};
