import axios from "axios";
import {
  FETCH_CERTIFICATES_FAILURE,
  FETCH_CERTIFICATES_REQUEST,
  FETCH_CERTIFICATES_SUCCESS,
} from "../actionType";

const API_URL = "https://66806e6756c2c76b495c072b.mockapi.io";
const API_URL_USER =
  "https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1";

export const getCertificates = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CERTIFICATES_REQUEST });

    try {
      const userResponse = await axios.get(`${API_URL_USER}/users/${userId}`);
      // console.log("user data", userResponse.data);
      const certificatesIds = userResponse.data.certificates.map(
        (certificate) => certificate.itemNo
      );
      console.log("certificate: ", certificatesIds);
      const certificatesResponse = await axios.get(`${API_URL}/certificates`, {
        params: { itemNo: certificatesIds.join("") },
      });
      console.log(certificatesResponse);
      dispatch({
        type: FETCH_CERTIFICATES_SUCCESS,
        payload: certificatesResponse.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CERTIFICATES_FAILURE,
        error: error.message,
      });
    }
  };
};
