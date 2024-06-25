import Cookies from "js-cookie";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_TOKEN,
  SET_ROLE,
} from "../actionType";

const initialState = {
  token: Cookies.get("token") || null, // Load token từ cookies
  role: Cookies.get("role") || null, // Load role từ cookies
  user: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.error,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        role: null, // Xóa role khi logout
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_ROLE:
      return {
        ...state,
        role: Cookies.get("role"),
      };
    default:
      return state;
  }
};

export default authReducer;
