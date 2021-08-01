import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  getInvoiceByRef,
  confirmInvoice,
} from "../../../actions/invoice.actions";
import { connect } from "react-redux";
import Spinner from "../../shared/Spinner";
import { parseISO, format } from "date-fns";
import { useHistory } from "react-router-dom";
const Invoice = ({ getInvoiceByRef, confirmInvoice, spinner, invoice }) => {
  let history = useHistory();
  const { invoiceRef } = useParams();
  useEffect(() => {
    getInvoiceByRef(invoiceRef);
  }, []);

  const onPayClick = async (e) => {
    e.preventDefault();
    await confirmInvoice(invoice._id);
    history.push("/dashboard/invoices");
  };
  return spinner.loading ? (
    <Spinner />
  ) : (
    <div className="bg-secondary absolute w-full h-full z-50 top-0 left-0 ">
      <div className="mx-auto container ">
        <div className="flex justify-between items-center gap-12">
          <div>
            <div className="text-2xl font-bold text-black uppercase">
              {`Invoice number #${invoice?.reference}`}
            </div>
            <div className="text-dark">Click Pay to pay your invoice.</div>
          </div>
          {invoice?.status === "pending" && (
            <button
              onClick={(e) => onPayClick(e)}
              className="px-4 py-2 font-semibold rounded text-white inline-block bg-success hover:bg-success-shade focus:bg-success-shade"
              type="button">
              Pay
            </button>
          )}
        </div>
        <div className="shadow-md rounded w-full bg-white mt-12 p-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-3xl text-black font-bold uppercase">
                <span className="text-dark text-opacity-50 ">#</span>
                {invoice?.reference}
              </div>
              <div className="text-dark text-2xl uppercase">
                {invoice?.title}
              </div>
            </div>
            <div>Logo</div>
          </div>
          <div className="flex justify-start items-center gap-8 my-8">
            <div>
              <div className="text-dark text-sm">Issued At</div>
              <div className="text-black font-bold text-sm">
                {invoice?.issueDate && format(parseISO(invoice?.issueDate), "PPP")}
              </div>
            </div>
            <div>
              <div className="text-dark text-sm">Due on</div>
              <div className="text-black font-bold text-sm">
                {invoice?.dueDate && format(parseISO(invoice?.dueDate), "PPP")}
              </div>
            </div>
          </div>
          <div>
            <div className="text-dark">Invoice for</div>
            <div className="text-black font-medium capitalize">
              {invoice?.buyer.firstName} {invoice?.buyer.lastName}
            </div>
          </div>
          <div className="mt-4">
            <table className="w-full border-separate border border-secondary-shade rounded ">
              <thead>
                <tr>
                  <th className="text-left w-3/6 text-secondary-shade font-semibold">
                    Item
                  </th>
                  <th className="text-left w-1/6 text-secondary-shade font-semibold">
                    Quantity
                  </th>
                  <th className="text-left w-1/6 text-secondary-shade font-semibold">
                    Price
                  </th>
                  <th className="text-left w-1/6 text-secondary-shade font-semibold">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoice?.items &&
                  invoice.items.map((el) => {
                    return (
                      <tr>
                        <td className="text-left w-3/6 capitalize">
                          {el.name}
                        </td>
                        <td className="text-left w-1/6">{el.quantity}</td>
                        <td className="text-left w-1/6">{el.unitPrice} TND</td>
                        <td className="text-left w-1/6">{el.subTotal} TND</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="w-full flex justify-between items-center my-6 gap-6">
              <div className="w-3/6 text-dark font-medium text-sm">
                {invoice?.description}
              </div>
              <div className="w-2/6 text-right text-dark font-medium">
                Total Amount
              </div>
              <div className="w-1/6 text-left text-dark font-bold text-xl">
                {invoice?.total} TND
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={(e) => history.goBack()}
              className="px-4 py-2 font-semibold rounded text-dark inline-block bg-secondary hover:bg-secondary-shade focus:bg-secondary-shade capitalize">
              go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Invoice.propTypes = {
  spinner: PropTypes.object.isRequired,
  invoice: PropTypes.object.isRequired,
  getInvoiceByRef: PropTypes.func.isRequired,
  confirmInvoice: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  spinner: state.spinnerReducer,
  invoice: state.invoiceReducer.invoice,
});

const mapDispatchToProps = {
  getInvoiceByRef,
  confirmInvoice,
};

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
