import "../Style/NavHeader.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";

export const NavHeader = () => {
  return (
    <div className="NavHeader">
      <div className="home-button">
        <button>
          {/* <img src={require("../images/logo razin.png")} /> */}
        </button>
      </div>
    </div>
  );
};
