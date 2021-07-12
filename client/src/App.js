import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./app/shared/Header";
import Footer from "./app/shared/Footer";
import Landing from "./app/Landing";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
