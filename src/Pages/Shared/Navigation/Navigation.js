import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="none">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontColor: "#ffffff" }}>
          <Link style={{textDecoration: 'none'}} to="/home">Doctor's Portal</Link>
          </Typography>

          <Link to="/appointment">
            <Button color="inherit">Appointment</Button>
          </Link>
          {
            user?.email ?
              <Box>
              <NavLink to="/dashboard">  <Button color="inherit">Dashboard</Button></NavLink>
              <Button onClick={logOut} color="inherit">Logout</Button>
              </Box>

              :
              <NavLink to="/login">  <Button color="inherit">Login</Button></NavLink>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
