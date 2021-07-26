import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth.actions";
import Spinner from "../../shared/Spinner";
const Login = ({ login, auth, spinner }) => {
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });
  let history = useHistory();
  const onChangeForm = (e) => {
    setloginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    login(loginForm);
  };
  if (auth.isAuthenticated) {
    history.push("/dashboard");
  }
  return spinner.loading ? (
    <Spinner />
  ) : (
    <div class="flex items-center justify-center h-screen">
      <div class="w-full max-w-md">
        <form
          onSubmit={(e) => onFormSubmit(e)}
          class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Invoice Login
          </div>
          <div class="mb-4">
            <label class="block text-dark text-sm font-normal mb-2" for="email">
              Email
            </label>
            <input
              onChange={(e) => onChangeForm(e)}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="email"
              required
              placeholder="Email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-dark text-sm font-normal mb-2"
              for="password">
              Password
            </label>
            <input
              onChange={(e) => onChangeForm(e)}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-dark mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              required
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="px-4 py-2 rounded text-white inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade"
              type="submit">
              Sign In
            </button>
            <Link
              to="/forget"
              class="inline-block align-baseline font-normal text-sm text-primary hover:text-primary-shade">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  spinner: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.authReducer,
  spinner: state.spinnerReducer,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
