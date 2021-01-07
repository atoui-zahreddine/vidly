import { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Select from "./Select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    let { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });

    if (!error) return null;
    const errors = {};
    for (let e of error.details) errors[e.path[0]] = e.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    await this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = {
      ...this.state.errors,
    };
    const errorMessages = this.validateProperty(input);
    if (errorMessages) errors[input.name] = errorMessages;
    else delete errors[input.name];

    const data = {
      ...this.state.data,
      [input.name]: input.value,
    };

    this.setState({ errors, data });
  };
  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors ? errors[name] : null}
      />
    );
  };

  renderInput = (name, label, type = "text") => {
    const { errors, data } = this.state;
    return (
      <Input
        label={label}
        type={type}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={errors ? errors[name] : null}
      />
    );
  };
  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className={`btn btn-primary `}>
        {label}
      </button>
    );
  };
}

export default Form;
