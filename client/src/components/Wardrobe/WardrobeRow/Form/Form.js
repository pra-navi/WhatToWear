import React from 'react'
import useStyles from './styles';
import { Paper, Typography, Divider, IconButton, Modal, Box } from '@material-ui/core';

/**
 * @author https://mui.com/material-ui/react-modal/
 */

const Form = ({addFunc, formName}) => {
    const classes = useStyles();

    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Please add image in your {formName}!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                In progress hehe.
            </Typography>
        </>
      )
}

export default Form;