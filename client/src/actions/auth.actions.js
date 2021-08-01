import axios from "axios";
import {
  USER_LOGIN,
  LOGIN_ERROR,
  USER_REGISTER,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  USER_LOGOUT,
  SPINNER_LOADED,
  SPINNER_LOADING,
} from "../constants/types";
import { setAuthToken } from "../utils/setAuthToken";
export const login = (data) => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/auth/login", data, config);
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
    setAuthToken(res.data.token); 
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: err,
    });
  }
  dispatch({
    type: SPINNER_LOADED,
  });
};
export const register = (data) => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.post("/api/auth/register", data, config);
    dispatch({
      type: USER_REGISTER,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: err,
    });
  }
  dispatch({
    type: SPINNER_LOADED,
  });
};

export const loadUser = () => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  dispatch({
    type: USER_LOADING,
  });
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth/authcheck");
    dispatch({
      type: USER_LOADED,
      payload: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
  dispatch({
    type: SPINNER_LOADED,
  });
};
export const logout = () => (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  dispatch({ type: USER_LOGOUT });
  dispatch({
    type: SPINNER_LOADED,
  });
};
