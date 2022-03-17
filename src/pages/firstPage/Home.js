import React from "react";
import Form from "./Form";
import TheLinks from "./TheLinks";
import "../../styles/Home.css";
import homeImage from "../../Assets/home.png";

function Home() {
  return (
    <div className="home">
      <div>
        <div className="heading">
          <h1>Welcome to Milton Keynes</h1>
        </div>
        <div className="home-container">
          <div className="left-content">
            <img className="image" src={homeImage} alt=""></img>
          </div>
          <div className="right-content">
            Milton Keynes is the largest settlement in Buckinghamshire, England,
            50 miles north-west of London. At the 2011 Census, the population of
            its urban area was almost 230,000
          </div>
        </div>
      </div>
      <TheLinks />
      <Form />
    </div>
  );
}

export default Home;
