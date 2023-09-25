import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>}/>
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
              </Route>
            
            <Route path="/home" element={<Home></Home>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;