import { SPINNER_LOADING, SPINNER_LOADED } from "../constants/types";

const initialState = {
  loading: false,
};
export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case SPINNER_LOADING:
      return {
        loading: true,
      };
    case SPINNER_LOADED:
      return {
        loading: false,
      };
    default:
      return state;
  }
}
