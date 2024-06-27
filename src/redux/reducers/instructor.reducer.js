import {
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
  FETCH_INSTRUCTORS_FAILURE,
} from "../actionType";

const initialState = {
  loading: false,
  instructors: [],
  error: "",
};

const instructorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSTRUCTORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INSTRUCTORS_SUCCESS:
      return {
        loading: false,
        instructors: action.payload,
        error: "",
      };
    case FETCH_INSTRUCTORS_FAILURE:
      return {
        loading: false,
        instructors: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default instructorsReducer;
