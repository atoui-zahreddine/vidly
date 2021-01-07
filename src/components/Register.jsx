import React from "react";
import Form from "./common/Form";
import Joi from "joi-browser";

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
  doSubmit = () => {
    console.log("register form submitted");
  };
  render() {
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
