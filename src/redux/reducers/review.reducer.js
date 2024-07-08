import { FETCH_REVIEWS_FAILURE, FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS } from "../actionType";

const initialState = {
    reviews: [],
    loading: false,
    error: "",
  };

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REVIEWS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_REVIEWS_SUCCESS:
        return {
          loading: false,
          reviews: action.payload,
        };
      case FETCH_REVIEWS_FAILURE:
        return {
          loading: false,
          error: action.error,
        };
        default:
      return state;
  }
};

export default reviewReducer;