import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import Logo from '../../images/ClothesLogo.png';
import MainText from '../../images/MainText.png';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img src={MainText} alt="icon" height="75px" />
                <img className={classes.image} src={Logo} alt="logo" height="85px" />
            </Link>
        </AppBar>  
    );
}

export default Navbar;