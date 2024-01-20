import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actions';
import '../../index.css';
import { IconButton, Menu, MenuItem } from '@mui/material';

const Navbar = () => {

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); 
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/authentication');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
      }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link
                to="/"
                className={classes.brandContainer}
            >
                <Typography
                    variant='h3'
                    noWrap
                    style={{
                        fontFamily: 'Syne Variable, sans-serif',
                        align: 'center',
                    }}
                >
                    what to wear?
                </Typography>
            </Link>
            <Toolbar className={classes.toolbar}>
                { user ? (
                    <div className={classes.profile}>
                        <IconButton
                            onClick={handleProfileClick}
                            aria-controls={open ? 'profile-menu' : undefined}
                        >
                            <Avatar className={classes.purple} alt={user.result.username} src={user.result.imageUrl}>{user.result.username.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.username}</Typography>
                        </IconButton>

                        <Menu
                          anchorEl={anchorEl}
                          id="profile-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        >
                          <MenuItem onClick={handleClose}>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                          </MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <Button variant="contained" color="primary" onClick={() => history.push('/authentication')} >Log In</Button>
                )}
            </Toolbar>
        </AppBar>
        
        
    );
}

export default Navbar;