import React from "react";
import { useState } from "react";
import "../../styles/Form.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const initialValues = {};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    navigate("/form-message", formValues, { state: { Form } });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1 className="login">Subscribe to the Milton keynes Newsletter</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="formInputs">
            <h1 className="field">username</h1>
            <input
              type="text"
              className="input-style"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="formInputs">
            <h1 className="field">Email Address</h1>
            <input
              type="text"
              name="email"
              className="input-style"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          {formErrors.email && <p>{formErrors.email}</p>}

          <div className="formInputs">
            <h1 className="field">password</h1>
            <input
              type="password"
              className="lastInput"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="buttonBlue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
