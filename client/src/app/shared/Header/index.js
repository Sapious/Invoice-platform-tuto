import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth.actions";
const Header = ({ auth, logout }) => {
  const match = useRouteMatch("/dashboard");
  return (
    !match && (
      <header>
        <nav className="flex items-center justify-between py-2 px-4 border-b border-gray-200">
          <div className="flex items-center justify-start w-1/3 gap-4">
            <Link
              to="/login"
              className=" p-4 align-baseline font-bold capitalize text-sm text-primary hover:text-primary-shade">
              Logo
            </Link>
          </div>
          <div className="flex items-center justify-center w-2/3 gap-12">
            <Link
              to="/"
              className=" p-4 align-baseline font-bold capitalize text-sm text-primary hover:text-primary-shade">
              Home
            </Link>
            <Link
              to="/login"
              className=" p-4 align-baseline font-bold capitalize text-sm text-primary hover:text-primary-shade">
              Pricing
            </Link>
            <Link
              to="/login"
              className=" p-4 align-baseline font-bold capitalize text-sm text-primary hover:text-primary-shade">
              test
            </Link>
          </div>
          {!auth.isAuthenticated && (
            <div className="flex items-center justify-end w-1/3 gap-4">
              <Link
                to="/login"
                className=" p-4 align-baseline font-bold capitalize text-sm text-primary hover:text-primary-shade">
                Login
              </Link>
              <Link
                to="/register"
                className=" p-4 align-baseline font-bold capitalize text-sm text-primary hover:text-primary-shade">
                Register
              </Link>
            </div>
          )}
          {auth.isAuthenticated && (
            <div className="flex items-center justify-end w-1/3 gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
                className=" p-4 align-baseline font-bold capitalize text-sm text-primary hover:text-primary-shade">
                Logout
              </button>
            </div>
          )}
        </nav>
      </header>
    )
  );
};
Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
