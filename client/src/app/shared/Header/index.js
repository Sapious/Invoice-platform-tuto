import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between py-2 px-4 bg-gray-100 shadow-lg">
        <div className="flex items-center justify-center w-2/3 gap-12">
          <Link
            to="/"
            className=" p-4 border border-gray-200 rounded hover:bg-blue-500 align-baseline font-normal text-sm text-blue-500 hover:text-white">
            Home
          </Link>
          <Link
            to="/login"
            className=" p-4 border border-gray-200 rounded hover:bg-blue-500 align-baseline font-normal text-sm text-blue-500 hover:text-white">
            Pricing
          </Link>
          <Link
            to="/login"
            className=" p-4 border border-gray-200 rounded hover:bg-blue-500 align-baseline font-normal text-sm text-blue-500 hover:text-white">
            test
          </Link>
        </div>
        <div className="flex items-center justify-end w-1/3 gap-4">
          <Link
            to="/login"
            className=" p-4 border border-gray-200 rounded hover:bg-blue-500 align-baseline font-normal text-sm text-blue-500 hover:text-white">
            Login
          </Link>
          <Link
            to="/register"
            className=" p-4 border border-gray-200 rounded hover:bg-blue-500 align-baseline font-normal text-sm text-blue-500 hover:text-white">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
