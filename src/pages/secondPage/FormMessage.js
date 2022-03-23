import "../../styles/Form.css";
import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

function FormMessage() {
  const { username } = useContext(LoginContext);
  return (
    <div className="pageTwo">
      <h1> Username</h1>
      <h2>name:{username}</h2>
    </div>
  );
}

export default FormMessage;
