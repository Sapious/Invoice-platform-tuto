import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Invoices from "./Invoices";
const Dashboard = () => {
  return (
    <Fragment>
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-5/6">
          <Topbar />
          <Switch>
            <div
              style={{ height: "calc(100% - 5rem)" }}
              className="bg-secondary rounded-bl-3xl -ml-6">
              <Route exact path="/dashboard" component={Home} />
              <Route exact path="/dashboard/invoices" component={Invoices} />
            </div>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
