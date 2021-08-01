import axios from "axios";
import {
  CREATE_INVOICE,
  GET_INVOICES,
  INVOICE_ERROR,
  GET_OWN_INVOICES,
  CANCEL_INVOICE,
  SPINNER_LOADING,
  SPINNER_LOADED,
  SEARCH_INVOICE,
  GET_INVOICE_BY_REF,
  CONFIRM_INVOICE,
} from "../constants/types";

export const createInvoice = (data) => async (dispatch) => {
  dispatch({ type: SPINNER_LOADING });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/invoices", data, config);
    dispatch({
      type: CREATE_INVOICE,
      payload: res.data.invoice,
    });
  } catch (err) {
    dispatch({
      type: INVOICE_ERROR,
      payload: err,
    });
  }
  dispatch({ type: SPINNER_LOADED });
};
export const getInvoices = () => async (dispatch) => {
  dispatch({ type: SPINNER_LOADING });
  try {
    const res = await axios.get("/api/invoices");
    dispatch({
      type: GET_INVOICES,
      payload: res.data.invoices,
    });
  } catch (err) {
    dispatch({
      type: INVOICE_ERROR,
      payload: err,
    });
  }
  dispatch({ type: SPINNER_LOADED });
};
export const getInvoiceByRef = (invoiceRef) => async (dispatch) => {
  dispatch({ type: SPINNER_LOADING });
  try {
    const res = await axios.get(`/api/invoices/${invoiceRef}`);
    dispatch({
      type: GET_INVOICE_BY_REF,
      payload: res.data.invoice,
    });
  } catch (err) {
    dispatch({
      type: INVOICE_ERROR,
      payload: err,
    });
  }
  dispatch({ type: SPINNER_LOADED });
};
export const getOwnInvoices = () => async (dispatch) => {
  dispatch({ type: SPINNER_LOADING });
  try {
    const res = await axios.get("/api/invoices/me");
    dispatch({
      type: GET_OWN_INVOICES,
      payload: res.data.invoices,
    });
  } catch (err) {
    dispatch({
      type: INVOICE_ERROR,
      payload: err,
    });
  }
  dispatch({ type: SPINNER_LOADED });
};
export const cancelInvoice = (invoiceId) => async (dispatch) => {
  dispatch({ type: SPINNER_LOADING });
  try {
    const res = await axios.get(`/api/invoices/${invoiceId}/cancel`);
    dispatch({
      type: CANCEL_INVOICE,
      payload: res.data.invoice,
    });
  } catch (err) {
    dispatch({
      type: INVOICE_ERROR,
      payload: err,
    });
  }
  dispatch({ type: SPINNER_LOADED });
};
export const confirmInvoice = (invoiceId) => async (dispatch) => {
  dispatch({ type: SPINNER_LOADING });
  try {
    const res = await axios.get(`/api/invoices/${invoiceId}/confirm`);
    dispatch({
      type: CONFIRM_INVOICE,
      payload: res.data.invoice,
    });
  } catch (err) {
    dispatch({
      type: INVOICE_ERROR,
      payload: err,
    });
  }
  dispatch({ type: SPINNER_LOADED });
};

export const searchInvoiceByReference = (query) => async (dispatch) => {
  dispatch({ type: SPINNER_LOADING });
  try {
    const res = await axios.get(`/api/invoices/auto_complete?q=${query}`);
    dispatch({
      type: SEARCH_INVOICE,
      payload: res.data.invoices,
    });
  } catch (err) {
    dispatch({
      type: INVOICE_ERROR,
      payload: err,
    });
  }
  dispatch({ type: SPINNER_LOADED });
};
