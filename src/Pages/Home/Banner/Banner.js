import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography, Container, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const bannerBg = {
  backgroundImage: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 450,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{ ...verticalCenter, textAlign: "left" }} xs={12} md={6}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{my:4, fontSize: 14, fontWeight: 300, color: "grey" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias cumque vero, facere ad suscipit architecto aperiam? Qui
              dolores dolorum voluptatum.
            </Typography>
            <NavLink to="/appointment"><Button variant='contained' style={{ backgroundColor: "#5CE7ED" }}>   GET APPOINTMENT</Button></NavLink>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ alignItems: 'right', width: "100%" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
