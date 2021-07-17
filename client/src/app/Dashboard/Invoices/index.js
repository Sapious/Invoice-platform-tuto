import React, { Fragment, useState } from "react";
import NewInvoice from "./components/NewInvoice";
import Status from "./components/Status";

const Invoices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = (e) => {
    setIsModalOpen(false);
  };
  return (
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
          />
          <span className="absolute ml-2">
            <i class="fas fa-search text-dark"></i>
          </span>
        </div>

        <div className="grid grid-cols-6 items-stretch mb-4">
          <div className="px-2 text-dark font-medium">No.</div>
          <div className="px-2 text-dark font-medium">Date</div>
          <div className="px-2 text-dark font-medium col-span-2">Client</div>
          <div className="px-2 text-dark font-medium">Amount</div>
          <div className="px-2 text-dark font-medium">Status</div>
        </div>
        <div className="grid grid-cols-6 bg-white shadow-md py-3.5 justify-items-start items-center rounded-md mb-4">
          <div className="px-2 text-dark font-medium">text</div>
          <div className="px-2 text-dark font-medium">test</div>
          <div className="px-2 text-dark font-medium col-span-2">test</div>
          <div className="px-2 text-dark font-medium">test</div>
          <div className="px-2 text-dark font-medium">
            <Status
              text={"Confirmed"}
              icon={"fas fa-check"}
              color={"success"}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 bg-white shadow-md py-3.5 justify-items-start items-center rounded-md">
          <div className="px-2 text-dark font-medium">text</div>
          <div className="px-2 text-dark font-medium">test</div>
          <div className="px-2 text-dark font-medium col-span-2">test</div>
          <div className="px-2 text-dark font-medium">test</div>
          <div className="px-2 text-dark font-medium">
            <Status text={"canceled"} icon={"fas fa-times"} color={"danger"} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Invoices;
