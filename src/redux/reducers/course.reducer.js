import {
  FETCH_ENROLLED_COURSES_FAILURE,
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_SUCCESS,
  SEARCH_COURSES_FAILURE,
  SEARCH_COURSES_REQUEST,
  SEARCH_COURSES_SUCCESS,
} from "../actionType";

const initialState = {
  courses: [],
  loading: false,
  error: "",
};

const enrolledCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENROLLED_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ENROLLED_COURSES_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
      };
    case FETCH_ENROLLED_COURSES_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case SEARCH_COURSES_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SEARCH_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case SEARCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "CREATE_COURSE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CREATE_COURSE_SUCCESS":
      return {
        ...state,
        loading: false,
        courses: [...state.courses, action.payload],
      };
    case "CREATE_COURSE_FAILURE":
      return { 
        ...state, 
        loading: false, 
        error: action.payload };
    default:
      return state;
  }
};

export default enrolledCoursesReducer;
