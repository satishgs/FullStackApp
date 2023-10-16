import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from './authSlice';
import { Button, TextField, Container, Typography } from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3001/api/authenticate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (data.authenticated) {
            dispatch(setAuthenticated(true));
        }
    };

    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <TextField label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
            <TextField label="Password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        </Container>
    );
};

export default Login;
