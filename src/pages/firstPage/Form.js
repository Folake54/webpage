import { useState } from "react";
import "../../styles/Form.css";

function Form() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.username) {
      errors.email = "Email is required";
    }
    if (!values.username) {
      errors.password = "Message is required";
    }
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Milton Keynes</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Your Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="userName"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>

          <div className="field">
            <label>Email here</label>
            <input
              type="Email"
              name="Email"
              placeholder="Email"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <label>Message</label>
            <input
              type="Message"
              name="Message"
              placeholder="Message"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.message}</p>

          <button className="fluid ui button blue">submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
