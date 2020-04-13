import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">ChicaPica Restaurant</h1>
                <p className="lead">
                  {" "}
                  Order Food Online or Reserve a Table for an Amazing Dining
                  Experience
                </p>
                <hr />
                <Link to="/order" className="btn btn-lg btn-info mr-2">
                  Order
                </Link>
                <Link to="/reservation" className="btn btn-lg btn-light">
                  Reservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
