import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png'
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Password didn't match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)
        e.preventDefault();
    }
    return (
        <Container>
            <Navigation></Navigation>
            <h1>Register Here</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: '75%', m: 2 }} id="standard"
                            name="name"
                            onBlur={handleOnBlur}
                            label="Full Name"
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 2 }} id="standard"
                            type='email'
                            name="email"
                            onBlur={handleOnBlur}
                            label="E-mail"
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 2 }}
                            id="standard-password-input"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField sx={{ width: '75%', m: 2 }}
                            id="standard-password-input"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button sx={{ width: '35%', m: 1 }} type="submit" variant="contained" >Submit</Button>
                        <br />
                        <NavLink to="/login"><Button variant='text'>Already registerd? Login here</Button></NavLink>
                    </form>}
                    {isLoading && <LinearProgress />}
                    
                    {user?.email && <Alert severity="success">Registerd Successfully!</Alert>} 
                    
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', height: '80%' }} src={login} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;