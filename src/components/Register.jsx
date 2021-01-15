import React from "react";
import Form from "./common/Form";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import authService from "../services/authService";
import { Redirect } from "react-router-dom";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };
  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      authService.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
      this.setState({
        errors: {},
        data: { username: "", password: "", name: "" },
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    if (authService.getCurrentUser()) return <Redirect to={"/"} />;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.onSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
