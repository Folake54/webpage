import Form from "../pages/firstPage/Form";
import React, { useState } from "react";
import FormMessage from "../pages/secondPage/FormMessage";
import { LoginContext } from "../contexts/LoginContext";

function Profile() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="pageTwo">
      <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <FormMessage /> : <Form />}
      </LoginContext.Provider>
    </div>
  );
}

export default Profile;
