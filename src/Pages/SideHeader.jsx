import "../Style/SideHeader.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";

export const SideHeader = () => {
  return (
    <div className="SideHeader">
      <button id="side-button">EDUCATION</button>
      <button id="side-button">EXPERIENCES</button>
      <button id="side-button">EXTRACURRICULARS </button>
      <button id="side-button">LANGUAGES AND SKILLS</button>
      <button id="side-button">PROJECTS</button>
    </div>
  );
};
