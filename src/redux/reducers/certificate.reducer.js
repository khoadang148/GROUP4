import {
  FETCH_CERTIFICATES_FAILURE,
  FETCH_CERTIFICATES_REQUEST,
  FETCH_CERTIFICATES_SUCCESS,
} from "../actionType";

const initialState = {
  loading: false,
  certificates: [],
  error: "",
};

const certificatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CERTIFICATES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CERTIFICATES_SUCCESS:
      return {
        ...state,
        loading: false,
        certificates: action.payload,
        error: "",
      };
    case FETCH_CERTIFICATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default certificatesReducer;
