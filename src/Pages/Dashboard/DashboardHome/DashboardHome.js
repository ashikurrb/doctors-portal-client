import React from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';
import { Grid } from '@mui/material';


const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
        <Grid item sx={{
            display: "flex",
            justifyContent: "center"
        }} xs={12} md={3} sm={6}>
               
            <Calendar
                date={date}
                setDate={setDate}
            >
            </Calendar>
        </Grid>

        <Grid item xs={12} md={9} sm={6}>
            <Appointments date={date}></Appointments>
        </Grid>
    </Grid>
    );
};

export default DashboardHome;