import React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import doctor from "../../../images/doctor.png";
import bg from "../../../images/bg.png";

const appointmentBanner = {
    backgroundImage: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{
              width: "100%",
              marginTop: "-120px"
            }}
            src={doctor}
            alt=""
          />
        </Grid>
       
        <Grid item xs={12} md={6} sx={{
            display: "flex",
            justifyContent:"flex-start",
            textAlign: "left",
            alignItems: "center",

        }}>
        <Box> 
          <Typography sx={{mb: 2}} style={{color: "#f3e5f5"}} variant="h6">APPOINTMENT</Typography>
          <Typography sx={{my: 2}} style={{color: "#f3e5f5"}} variant="h4">Make an Appointment Today</Typography>
          <Typography sx={{my: 2}} variant="h6" style={{color: "#f3e5f5", fontSize: "15px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dignissimos vel rem, animi adipisci numquam minima provident laborum dolorum earum! </Typography>
          <Button sx={{my: 2}} style={{backgroundColor: "#5CE7ED"}} variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
