import React, { useState } from "react";
import { LoginContext } from "./contexts/LoginContext";
import "./App.css";
import Home from "../src/pages/firstPage/Home";
import FormMessage from "./pages/secondPage/FormMessage";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUsername] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider value={{ userName, setUsername, setShowProfile }}>
        {showProfile ? <FormMessage /> : <Home />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
