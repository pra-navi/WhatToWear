import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { signup, login } from '../../actions/auth';

const initialState = { username: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes =  useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const [error, setError] = useState('');

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            if(isSignUp) {
                await dispatch(signup(formData, history));
            } else {
                await dispatch(login(formData, history));
            }
            setFormData(initialState);
            setError('');
            history.push('/');
        } catch (error) {
            setError(error.message);
        }
    };
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
        setError('');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Log In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Input name="username" label="Username" handleChange={handleChange} type="username" autofocus />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    { error && <Typography variant="body2" className={classes.error} color="error"> {error} </Typography> }
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignUp ? 'Sign Up' : 'Log In' }
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>

    )
};

export default Auth;