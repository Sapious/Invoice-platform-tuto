import React, { Fragment, useState, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useClickAway } from "react-use";
import { logout } from "../../../../actions/auth.actions";

const Topbar = ({ auth, logout }) => {
  const [IsDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDown = useRef(null);
  useClickAway(dropDown, (e) => {
    console.log();
    if (!e.path.find((el) => el.id === "parent-drop")) {
      setIsDropDownOpen(false);
    }
  });

  return (
    <Fragment>
      <div className="flex justify-between items-center py-4 px-12 rounded-tl-3xl -ml-6 bg-secondary h-20">
        <div className=" font-bold text-dark text-lg">Home</div>
        <div
          id="parent-drop"
          onClick={(e) => setIsDropDownOpen(!IsDropDownOpen)}
          className="flex justify-between items-center border border-gray-200 rounded p-2 cursor-pointer gap-2">
          <div className=" rounded-full w-6 h-6 bg-blue-300 text-blue-500 flex justify-center items-center">
            <div className="uppercase text-sm">
              {auth.user.lastName[0]}
              {auth.user.firstName[0]}
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="capitalize text-dark text-sm flex justify-center items-center">
              {auth.user.firstName} {auth.user.lastName}
            </div>
            <i class="fas fa-chevron-down text-dark text-sm"></i>
          </div>
        </div>
      </div>
      {IsDropDownOpen && (
        <div
          ref={dropDown}
          style={{ width: "135px" }}
          className="absolute right-12 top-16 bg-gray-100 shadow-md rounded-md">
          <div className="text-dark hover:text-black p-2 hover:bg-gray-200 cursor-pointer">
            Settings
          </div>
          <div
            className="text-dark hover:text-black p-2 hover:bg-gray-200 cursor-pointer"
            onClick={(e) => logout()}>
            Logout
          </div>
        </div>
      )}
    </Fragment>
  );
};
Topbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
