import axios from 'axios';
import { UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../actionType';





export const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST,
});

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});


export const updateUser = (userId, firstName, lastName,headline,description,mysite,facebookbprofile,twitterprofile,linkedinprofile,youtubeprofile) => {
  return async (dispatch) => {
    dispatch(updateUserRequest());
    try {
      const response = await axios.put(`https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/users/${userId}`, {
        firstname: firstName,
        lastname: lastName,
        headline: headline,
        description: description,
        mysite: mysite,
        facebookbprofile: facebookbprofile,
        twitterprofile: twitterprofile,
        linkedinprofile: linkedinprofile,
        youtubeprofile: youtubeprofile,
      });
      dispatch(updateUserSuccess(response.data));
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };
};
