import Cookies from "js-cookie";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_TOKEN,
  SET_ROLE,
  SET_USER,
  SET_ID,
} from "../actionType";

const initialState = {
  token: Cookies.get("token") || null, 
  role: Cookies.get("role") || null, 
  user: null,
  error: null,
  loading: false,
  id: Cookies.get("id") || null,
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
        role: null, 
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
    case SET_ID: 
      return {
        ...state,
        id: Cookies.get("id"),
      };
    default:
      return state;
  }
};

export default authReducer;
