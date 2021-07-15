import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Topbar = ({ auth }) => {
  return (
    <div className="flex justify-between items-center py-4 px-12 rounded-tl-3xl -ml-6 bg-secondary h-20">
      <div className=" font-bold text-dark text-lg">Home</div>
      <div className="flex justify-between items-center border border-gray-200 rounded p-2">
        <div>img</div>
        <div className="flex justify-between items-center">
          <div>
            {auth.user.firstName}
            { auth.user.lastName}
          </div>
          <i class="fas fa-chevron-down text-dark text-sm"></i>
        </div>
      </div>
    </div>
  );
};
Topbar.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Topbar);
