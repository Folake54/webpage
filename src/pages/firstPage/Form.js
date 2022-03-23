import React, { useState, useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import "../../styles/Form.css";

function Form() {
  const { setUsername, setShowProfile } = useContext(LoginContext);
  const { useEmail } = useState();

  return (
    <form className="container">
      <h1 className="login">Subscribe to the Milton keynes Newsletter</h1>
      <div className="formInputs">
        <h1 className="field">username</h1>

        <input
          className="input-style"
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="formInputs">
        <h1 className="field">Email Address</h1>
        <input
          className="input-style"
          type="text"
          placeholder="Email"
          onChange={(event) => {
            useEmail(event.target.value);
          }}
        />
      </div>
      <div className="formInputs">
        <h1 className="field">Password</h1>
        <input
          className="lastInput"
          type="text"
          placeholder="Password..."
          onChange={() => {
            setShowProfile(true);
          }}
        />
      </div>
      <button
        className="buttonBlue"
        onClick={() => {
          setShowProfile(true);
        }}>
        LOGIN
      </button>
    </form>
  );
}

export default Form;
