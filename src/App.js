import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/firstPage/Home";
import FormMessage from "./pages/secondPage/FormMessage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/form-message" exact element={<FormMessage />} />
      </Routes>
    </div>
  );
}

export default App;
