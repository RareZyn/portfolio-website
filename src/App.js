import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { NavHeader } from "./Pages/NavHeader";
import { SideHeader } from "./Pages/SideHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <NavHeader />
        <Routes></Routes>
        <SideHeader />
      </Router>
    </div>
  );
}

export default App;
