import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="from-group mb-4">
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default Input;
