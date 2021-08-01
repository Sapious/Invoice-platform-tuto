import React, { Fragment, useState, useEffect } from "react";
import NewInvoice from "./components/NewInvoice";
import Status from "./components/Status";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getOwnInvoices,
  cancelInvoice,
  searchInvoiceByReference,
} from "../../../actions/invoice.actions";
import { parseISO, format } from "date-fns";
import Spinner from "../../shared/Spinner";
import { Link, useRouteMatch } from "react-router-dom";
const Invoices = ({
  getOwnInvoices,
  invoiceState,
  cancelInvoice,
  spinner,
  searchInvoiceByReference,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [SearchReference, setSearchReference] = useState("");
  const closeModal = (e) => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getOwnInvoices();
  }, []);

  const onChangeSearch = async (e) => {
    e.preventDefault();
    await setSearchReference(e.target.value);
    await searchInvoiceByReference(e.target.value);
  };
  return spinner.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {isModalOpen && <NewInvoice closeModal={closeModal} />}
      <div className="py-4 px-12">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-dark text-lg font-semibold">Invoices</div>
            <span className="text-dark text-sm">List all your invoices</span>
          </div>
          <button
            onClick={(e) => setIsModalOpen(true)}
            class="px-4 py-2 text-lg font-semibold rounded text-white inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade"
            type="button">
            New Invoice
          </button>
        </div>
        <div className="flex justify-between items-center w-full my-4">
          <input
            name="searchInvoice"
            placeholder="Keyword"
            className="py-2 pr-4 pl-8 rounded focus:outline-none w-full text-dark shadow"
            type="text"
            onChange={(e) => onChangeSearch(e)}
            value={SearchReference}
            autoFocus
          />
          <span className="absolute ml-2">
            <i class="fas fa-search text-dark"></i>
          </span>
        </div>
        <div className="grid grid-cols-8 bg-white shadow-md py-3.5 justify-items-start items-center rounded-md mb-4">
          <div className="px-2 text-dark font-medium">.No</div>
          <div className="px-2 text-dark font-medium">Client</div>
          <div className="px-2 text-dark font-medium col-span-2">Issued At</div>
          <div className="px-2 text-dark font-medium col-span-2">Due on</div>
          <div className="px-2 text-dark font-medium"> Status</div>
          <div className="px-2 text-dark font-medium"> Action</div>
        </div>
        {invoiceState.invoices &&
          invoiceState?.invoices.map((elInvoice) => {
            return (
              <div className="grid grid-cols-8 bg-white shadow-md py-3.5 justify-items-start items-center rounded-md mb-4">
                <div className="px-2 text-dark font-medium">
                  #{elInvoice.reference}
                </div>
                <div className="px-2 text-dark font-medium capitalize">
                  {elInvoice.buyer.firstName} {elInvoice.buyer.lastName}
                </div>
                <div className="px-2 text-dark font-medium col-span-2">
                  {format(parseISO(elInvoice.issueDate), "PPPP")}
                </div>
                <div className="px-2 text-dark font-medium col-span-2">
                  {format(parseISO(elInvoice.dueDate), "PPPP")}
                </div>
                <div className="px-2 text-dark font-medium">
                  <Status
                    text={elInvoice?.status}
                    icon={`${
                      elInvoice.status === "confirmed"
                        ? "fas fa-check"
                        : elInvoice.status === "pending"
                        ? "fas fa-hourglass-start"
                        : "fas fa-times"
                    }`}
                    color={`${
                      elInvoice.status === "confirmed"
                        ? "success"
                        : elInvoice.status === "pending"
                        ? "warning"
                        : "danger"
                    }`}
                  />
                </div>
                <div className="px-2 text-dark font-medium flex justify-start items-center gap-4">
                  {elInvoice?.status === "pending" && (
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        await cancelInvoice(elInvoice._id);
                        await getOwnInvoices();
                      }}
                      type="button"
                      className="py-1 px-2 rounded text-white inline-block bg-danger hover:bg-danger-shade focus:bg-danger-shade">
                      <i class="fas fa-trash"></i>
                    </button>
                  )}
                  <Link
                    to={`/dashboard/invoices/${elInvoice.reference}`}
                    className="py-1 px-2 rounded text-white inline-block bg-primary hover:bg-primary-shade focus:bg-primary-shade">
                    <i class="fas fa-tv"></i>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};
Invoices.propTypes = {
  getOwnInvoices: PropTypes.func.isRequired,
  cancelInvoice: PropTypes.func.isRequired,
  invoiceState: PropTypes.object.isRequired,
  searchInvoiceByReference: PropTypes.func.isRequired,
  spinner: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  invoiceState: state.invoiceReducer,
  spinner: state.spinnerReducer,
});

const mapDispatchToProps = {
  getOwnInvoices,
  cancelInvoice,
  searchInvoiceByReference,
};

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);
