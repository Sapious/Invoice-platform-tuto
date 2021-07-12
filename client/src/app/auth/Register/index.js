import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [RegisterForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    street: "",
    city: "",
    zipCode: "",
    firstName: "",
    lastName: "",
    IDCard: "",
    phoneNumber: "",
  });
  const onChangeForm = (e) => {
    setRegisterForm({ ...RegisterForm, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (RegisterForm.password === RegisterForm.confirmPassword) {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        RegisterForm,
        config
      );
    } else {
      console.log("password don't match");
    }
  };
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="w-full max-w-md">
        <form
          onSubmit={(e) => onFormSubmit(e)}
          class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Invoice Register
          </div>
          <div className="flex w-full gap-4">
            <div class="mb-4 w-1/2">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="firstName">
                First Name
              </label>
              <input
                onChange={(e) => onChangeForm(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="firstName"
                id="firstName"
                type="text"
                required
                placeholder="First Name"
              />
            </div>
            <div class="mb-4 w-1/2">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="lastName">
                Last Name
              </label>
              <input
                onChange={(e) => onChangeForm(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="lastName"
                id="lastName"
                type="text"
                required
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div class="mb-4 w-1/2">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="IDCard">
                ID CARD
              </label>
              <input
                onChange={(e) => onChangeForm(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="IDCard"
                id="IDCard"
                type="number"
                required
                placeholder="ID CARD"
              />
            </div>
            <div class="mb-4 w-1/2">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="phoneNumber">
                Phone Number
              </label>
              <input
                onChange={(e) => onChangeForm(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phoneNumber"
                id="phoneNumber"
                type="number"
                required
                placeholder="Phone Number"
              />
            </div>
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
          <div class="mb-4">
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
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-normal mb-2"
              for="password">
              Confirm Password
            </label>
            <input
              onChange={(e) => onChangeForm(e)}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="confirmPassword"
              id="confirmPassword"
              required
            />
          </div>
          <div className="flex w-full gap-4">
            <div class="mb-4 w-1/3">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="city">
                City
              </label>
              <input
                onChange={(e) => onChangeForm(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="city"
                id="city"
                type="text"
                required
                placeholder="City"
              />
            </div>
            <div class="mb-4 w-1/3">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="street">
                Street
              </label>
              <input
                onChange={(e) => onChangeForm(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="street"
                id="street"
                type="text"
                placeholder="Street"
              />
            </div>
            <div class="mb-4 w-1/3">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="zipCode">
                Zip Code
              </label>
              <input
                onChange={(e) => onChangeForm(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="zipCode"
                id="zipCode"
                type="number"
                required
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
              type="submit">
              Register
            </button>
            <Link
              class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
              to="/login">
              Go to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
