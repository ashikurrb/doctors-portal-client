import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png'
import { NavLink, useLocation, useNavigate, } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInwithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }


    const handleGoogleSignIn = () => {
        signInwithGoogle(location, navigate)
    }

    return (
        <Container>
            <Navigation></Navigation>
            <h1>Login Here</h1>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: '75%', m: 2 }} id="standard"
                            type='email'
                            name="email"
                            onblur={handleOnChange}
                            label="E-mail" variant="standard" />
                        <TextField sx={{ width: '75%', m: 2 }}
                            id="standard-password-input"
                            name="password"
                            onblur={handleOnChange}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button sx={{ width: '35%', m: 1 }} type="submit" variant="contained" >Login</Button>
                        <br />
                        <Button onClick={handleGoogleSignIn} sx={{ width: '35%', m: 1 }} variant="contained" color='warning' >Sign in with Google</Button>
                        <br />
                        <NavLink to="/register"><Button variant='text'>New user? Please Register</Button></NavLink>
                        {isLoading && <LinearProgress />}
                        {user?.email && <Alert severity="success">Login Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', height: '80%' }} src={login} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;