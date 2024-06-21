import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SET_TOKEN } from "../actionType"

const initialState = {
    user: null,
    loading: false,
    error: null,
    role: null,
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state, 
                loading: true, 
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                role: action.payload.role,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
            }
        case SET_TOKEN:
            return { 
                ...state, 
                token: action.payload 
            };
        default:
            return state;
    }
}

export default authReducer