import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/appointment" element={<Appointment></Appointment>} />
          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;