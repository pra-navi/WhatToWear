import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import Logo from '../../images/ClothesLogo.png';
import MainText from '../../images/MainText.png';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actions';

const Navbar = () => {

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); 
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/authentication');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img src={MainText} alt="icon" height="75px" />
                <img className={classes.image} src={Logo} alt="logo" height="85px" />
            </Link>
            <Toolbar className={classes.toolbar}>
                { user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.username} src={user.result.imageUrl}>{user.result.username.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.username}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button variant="contained" color="primary" onClick={() => history.push('/authentication')} >Log In</Button>
                )}
            </Toolbar>
        </AppBar>
        
    );
}

export default Navbar;