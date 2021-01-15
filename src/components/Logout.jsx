import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import authService from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    authService.logout();
    window.location = "/";
  }

  render() {
    return (
      <div>
        <Redirect to={"/"} />
      </div>
    );
  }
}

export default Logout;
