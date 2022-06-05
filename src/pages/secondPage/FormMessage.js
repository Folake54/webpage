import "../../styles/Form.css";
import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

function FormMessage() {
  const { userName, userEmail } = useContext(LoginContext);
  return (
    <div className="pageTwo">
      <h1>Welcome to the Milton keynes</h1>
      <h2>Full name : {userName}</h2>
      <h2>Email Address : {userEmail}</h2>
    </div>
  );
}

export default FormMessage;
