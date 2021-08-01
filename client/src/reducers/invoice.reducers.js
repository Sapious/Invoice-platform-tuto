import {
  CREATE_INVOICE,
  GET_INVOICE,
  INVOICE_ERROR,
  GET_INVOICES,
  GET_OWN_INVOICES,
  CANCEL_INVOICE,
  CONFIRM_INVOICE,
  SEARCH_INVOICE,
  GET_INVOICE_BY_REF,
} from "../constants/types";

const initialState = {
  loading: true,
  invoices: [],
  invoice: null,
  err: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_INVOICE_BY_REF:
      return {
        ...state,
        loading: false,
        invoice: payload,
      };
    case SEARCH_INVOICE:
      return {
        ...state,
        loading: false,
        invoices: payload,
      };
    case CREATE_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, payload],
        loading: false,
      };
    case GET_INVOICE:
      return {
        ...state,
        loading: false,
        invoice: payload,
      };
    case GET_INVOICES:
      return {
        ...state,
        loading: false,
        invoices: payload,
      };
    case GET_OWN_INVOICES:
      return {
        ...state,
        loading: false,
        invoices: payload,
      };
    case CANCEL_INVOICE:
      return {
        ...state,
        loading: false,
        invoice: payload,
      };
    case CONFIRM_INVOICE:
      return {
        ...state,
        loading: false,
        invoice: payload,
      };
    case INVOICE_ERROR:
      return {
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
}
