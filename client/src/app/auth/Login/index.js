import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const Login = () => {
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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "http://localhost:8000/auth/login",
      loginForm,
      config
    );
    localStorage.setItem("access_token", res.data.token);
  };
  if (localStorage.getItem("access_token")) {
    history.push("/");
  }
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="w-full max-w-md">
        <form
          onSubmit={(e) => onFormSubmit(e)}
          class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Invoice Login
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-normal mb-2"
              for="email">
              Email
            </label>
            <input
              onChange={(e) => onChangeForm(e)}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="email"
              required
              placeholder="Email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-normal mb-2"
              for="password">
              Password
            </label>
            <input
              onChange={(e) => onChangeForm(e)}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              required
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
              type="submit">
              Sign In
            </button>
            <Link
              to="/forget"
              class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
