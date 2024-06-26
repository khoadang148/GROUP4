import {
  FETCH_ENROLLED_COURSES_FAILURE,
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_SUCCESS,
} from "../actionType";

const initialState = {
  courses: [], 
  loading: false,
  error: null,
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
        ...state,
        loading: false,
        courses: action.payload, 
      };
    case FETCH_ENROLLED_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default enrolledCoursesReducer;
