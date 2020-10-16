import React from "react";

const Form = (props) => {
  const { values, submit, change, errors, disabled } = props;
  return (
    // <form className="form container" onSubmit={onSubmit}>
    <form className="form container" onSubmit={submit}>
      <h1>Create your account</h1>
      <div className="form-group inputs">
        <h2>Personal information</h2>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={change}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={change}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="text"
            value={values.password}
            onChange={change}
          />
        </label>
        <label>
          I accept the Terms and Conditions
          <input
            value={true}
            name="terms"
            type="checkbox"
            onChange={change}
            checked={values.terms === "true"}
          />
        </label>
      </div>
      <div className="form-group submit">
        <button disabled={disabled}>submit</button>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>
    </form>
  );
};

export default Form;
