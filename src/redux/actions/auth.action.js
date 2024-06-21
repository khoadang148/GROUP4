import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SET_TOKEN } from "../actionType"

export const login = (username, password) => {
    return async (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
        try {
            const response = await axios.get('http://localhost:3001/users', {
                params: {username, password}
            });
            console.log(response)
            const user = response.data.find(
                (user) => user.username === username && user.password === password
            );
            if (user) {
                const token = `fake-jwt-token-${user.role}`;
                dispatch({ type: LOGIN_SUCCESS, payload: user});
                dispatch({type: SET_TOKEN, payload:token});
                localStorage.setItem('token', token)
                localStorage.setItem('role', user.role);
            } else {
                dispatch({type: LOGIN_FAILURE, error:"Invalid account"});
            }
        } catch (error) {
            dispatch({type: LOGIN_FAILURE, error: error.message});
        }
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role'); 
    return {
        type: LOGOUT,
    }
}