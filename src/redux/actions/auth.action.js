import axios from "axios";
import Cookies from "js-cookie"; // Import thư viện cookies

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_TOKEN,
  SET_ID,
} from "../actionType";

const API_URL = "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1";

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: { username, password },
      });
      console.log(response);
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        const token = `fake-jwt-token-${user.username}`;
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        dispatch({ type: SET_TOKEN, payload: token });

        Cookies.set("token", token, { expires: 7 });
        Cookies.set("role", user.role, { expires: 7 });
        Cookies.set("id", user.id, { expires: 7 });

      } else {
        dispatch({ type: LOGIN_FAILURE, error: "Invalid account" });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, error: error.message });
    }
  };
};

export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("role");
  return {
    type: LOGOUT,
  };
};

export const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});

export const setRole = (role) => {
  return {
    type: "SET_ROLE",
    payload: role,
  };
};

export const setID = (id) => {
  // Thêm action lưu user
  return {
    type: SET_ID,
    payload: id,
  };
};
