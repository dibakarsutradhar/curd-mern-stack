import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Menu from "./components/store/Menu";
import Order from "./components/store/Order";
import Reservation from "./components/store/Reservation";
import Tracker from "./components/store/Tracker";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

// Check for Token
if (localStorage.jwtToken) {
  // Set Auth Token Header Auth
  setAuthToken(localStorage.jwtToken);
  // Decode Token and Get User Info and Exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for Expired Token
  const currenTime = Date.now() / 1000;
  if (decoded.exp < currenTime) {
    // Logout User
    store.dispatch(logoutUser());
    // Clear Current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect To Login
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Landing} />
          <div className="container">
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/order" exact component={Order} />
            <Route path="/reservation" exact component={Reservation} />
            <Route path="/tracker" exact component={Tracker} />
            <Switch>
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
