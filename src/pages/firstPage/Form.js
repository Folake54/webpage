import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import "../../styles/Form.css";

function login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div className="container">
      <form>
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
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>

          <div className="formInputs">
            <h1 className="field">Email Address</h1>
            <input
              type="text"
              name="email"
              className="input-style"
              placeholder="Email"
            />
          </div>

          <div className="formInputs">
            <h1 className="field">password</h1>
            <input
              type="password"
              className="lastInput"
              name="password"
              placeholder="Password"
            />
          </div>

          <button
            className="buttonBlue"
            onClick={() => {
              setShowProfile(true);
            }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default login;
