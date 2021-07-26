import axios from "axios";
import {
  CREATE_INVOICE,
  GET_INVOICES,
  INVOICE_ERROR,
  GET_OWN_INVOICES,
  CANCEL_INVOICE,
  SPINNER_LOADING,
  SPINNER_LOADED,
} from "../constants/types";

export const createInvoice = (data) => async (dispatch) => {
  dispatch({ type: SPINNER_LOADING });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:8000/invoices",
      data,
      config
    );
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
    const res = await axios.get("http://localhost:8000/invoices");
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
export const getInvoiceByRef = (invoiceRef) => async (dispatch) => {};
export const getOwnInvoices = () => async (dispatch) => {
  dispatch({ type: SPINNER_LOADING });
  try {
    const res = await axios.get("http://localhost:8000/invoices/me");
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
    const res = await axios.get(
      `http://localhost:8000/invoices/${invoiceId}/cancel`
    );
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
    const res = await axios.get(
      `http://localhost:8000/invoices/${invoiceId}/confirm`
    );
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
