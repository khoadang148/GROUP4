import axios from "axios";
import { FETCH_REVIEWS_FAILURE, FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS } from "../actionType";

const API_URL = 'https://66806e6756c2c76b495c072b.mockapi.io/review';

export const getAllReviews = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_REVIEWS_REQUEST });
  
      try {
        const reviewsResponse = await axios.get(`${API_URL}`);
        // console.log(coursesResponse);
        dispatch({
          type: FETCH_REVIEWS_SUCCESS,
          payload: reviewsResponse.data,
        });
      } catch (error) {
        dispatch({
          type: FETCH_REVIEWS_FAILURE,
          error: error.message,
        });
      }
    };
  };