import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getInvoiceByRef } from "../../../actions/invoice.actions";
import { connect } from "react-redux";

const Invoice = ({ getInvoiceByRef }) => {
  const { invoiceRef } = useParams();
  useEffect(() => {
    //getInvoiceByRef(invoiceRef);
  }, []);
  return (
    <div className="bg-secondary absolute w-full h-full z-50 top-0 left-0">
      <div className="mx-auto container">
        <div className="flex justify-between items-center gap-12">
          <div>
            <div className="text-2xl font-bold text-black">
              {`Invoice number #${invoiceRef}`}
            </div>
            <div className="text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              labore ipsum. Harum repudiandae ut possimus! Sequi repellat fuga
              eum libero iusto? Blanditiis exercitationem expedita veritatis
              assumenda, quae repudiandae ipsam perferendis!
            </div>
          </div>
          <button
            class="px-4 py-2 font-semibold rounded text-white inline-block bg-success hover:bg-success-shade focus:bg-success-shade"
            type="button">
            Pay
          </button>
        </div>
        <div className="shadow rounded w-full bg-white mt-12">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-3xl text-black font-bold">
                <span className="text-dark text-opacity-50">#</span>
                {invoiceRef}
              </div>
              <div className="text-dark text-2xl uppercase">name</div>
            </div>
            <div>Logo</div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <div>Issued At</div>
              <div></div>
            </div>
            <div>
              <div>Due on</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Invoice.propTypes = {};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getInvoiceByRef,
};

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
