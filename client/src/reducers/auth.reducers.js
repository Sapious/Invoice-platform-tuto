import {
  USER_LOGIN,
  USER_REGISTER,
  LOGIN_ERROR,
  USER_LOADING,
  USER_LOADED,
  USER_LOGOUT,
  AUTH_ERROR,
} from "../constants/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  err: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        user: payload,
        isAuthenticated: true,
      };
    case USER_LOGIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case USER_REGISTER:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        err: payload,
      };
    case AUTH_ERROR:
    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        err: {},
      };
    default:
      return state;
  }
}
