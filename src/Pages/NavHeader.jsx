import "../Style/NavHeader.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";

export const NavHeader = () => {
  return (
    <div className="NavHeader">
      <div className="home-div">
        <button id="home-button">
          <img id="triangle-logo" src={require("../images/logo.png")} />
          <h1>RAZIN</h1>
        </button>
      </div>

      <div className="nav-div">
        <button id="nav-button">CONTACT</button>
        <button id="nav-button">RESUME</button>
        <button id="nav-button">GITHUB</button>
        <button id="nav-button">LINKEDIN</button>
      </div>
    </div>
  );
};
