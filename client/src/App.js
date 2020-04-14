import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Menu from "./components/store/Menu";
import Order from "./components/store/Order";
import Reservation from "./components/store/Reservation";
import Tracker from "./components/store/Tracker";

import "./App.css";

// Check for Token
if (localStorage.jwtToken) {
  // Set Auth Token Header Auth
  setAuthToken(localStorage.jwtToken);
  // Decode Token and Get User Info and Exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
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
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
