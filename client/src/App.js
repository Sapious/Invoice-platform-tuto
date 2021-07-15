import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./app/shared/Header";
import Footer from "./app/shared/Footer";
import Landing from "./app/Landing";
import Dashboard from "./app/Dashboard";
import { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { setAuthToken } from "./utils/setAuthToken";
import { loadUser } from "./actions/auth.actions";
import PrivateRoute from "./routing/PrivateRoute";
import { USER_LOGOUT } from "./constants/types";
function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: USER_LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute component={Dashboard} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
