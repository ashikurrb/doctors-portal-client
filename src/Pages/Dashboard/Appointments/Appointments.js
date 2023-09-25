import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({date}) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [date])
    return (
        <div>
            <h3>Appointments: {appointments.length}</h3>
            <TableContainer sx={{ border: 1,  borderRadius: '5px', boxShadow: 2 }} component={Paper}>
                <Table aria-label="appointmets-table">
                    <TableHead>
                        <TableRow sx={{ border: 1}}>
                            <TableCell sx={{ borderBottom: 2}} >Name</TableCell>
                            <TableCell sx={{ borderBottom: 2}} >Service</TableCell>
                            <TableCell sx={{ borderBottom: 2}} >Time</TableCell>
                            <TableCell sx={{ borderBottom: 2}} >Phone</TableCell>
                            <TableCell sx={{ borderBottom: 2}} >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow 
                                key={row._id}
                            >
                                <TableCell>{row.patientName}</TableCell>
                                <TableCell>{row.time}</TableCell>
                                <TableCell>{row.serviceName}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;