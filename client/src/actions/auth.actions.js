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
  SPINNER_LOADING
} from "../constants/types";
import { setAuthToken } from "../utils/setAuthToken";
export const login = (data) => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING
  })
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:8000/auth/login",
      data,
      config
    );
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
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
    await axios.post("http://localhost:8000/auth/register", data, config);
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
    const res = await axios.get("http://localhost:8000/auth/authcheck");
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
