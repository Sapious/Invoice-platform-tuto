import React from "react";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-1/6 bg-primary h-full flex flex-col items-center">
      <div className="w-full text-white font-semibold uppercase py-4 h-20 flex items-center justify-center px-6 text-center mb-10">
        logo
      </div>
      <div className=" w-full flex flex-col gap-2 h-5/6">
        <NavLink
          activeClassName="bg-primary-shade"
          exact
          to="/dashboard"
          className="py-4 px-6 hover:bg-primary-shade text-white font-semibold uppercase rounded-l-full ease-in-out duration-200 flex items-center gap-2">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-shade"
          exact
          to="/dashboard/invoices"
          className="py-4 px-6 hover:bg-primary-shade text-white font-semibold uppercase rounded-l-full ease-in-out duration-200 flex items-center gap-2">
          <i class="fas fa-file-invoice"></i>
          <span>Invoices</span>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-shade"
          exact
          to="/dashboard/test"
          className="py-4 px-6 hover:bg-primary-shade text-white font-semibold uppercase rounded-l-full ease-in-out duration-200 flex items-center gap-2">
          <span>test</span>
        </NavLink>
      </div>
      <div className="w-full flex flex-col text-white font-semibold uppercase h-1/6 justify-end pb-5">
        <Link
          to="/dashboard/invoice"
          className="py-4 px-6 hover:bg-primary-shade text-white font-semibold uppercase rounded-l-full ease-in-out duration-200">
          Test
        </Link>
        <Link
          to="/dashboard/invoice"
          className="py-4 px-6 hover:bg-primary-shade text-white font-semibold uppercase rounded-l-full ease-in-out duration-200">
          Test
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
