import React, { useState } from 'react'
import useStyles from './styles';
import { Paper, Typography, Divider, IconButton, Modal, Box, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';

/**
 * @author https://mui.com/material-ui/react-modal/
 */

const Form = ({addFunc, formName}) => {
    const classes = useStyles();

    const [image, setImage] = useState(null);
    const [fileMessage, setFileMessage] = useState('No image is choosen');

    const allowedFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    function handleFileUpload({ base64, file }) {
        if (allowedFileTypes.includes(file.type)) {
            setImage(base64);
            setFileMessage('You have choosen an image');
        } else {
            // Display an error message or perform appropriate actions
            setImage(null);
            setFileMessage('No image is choosen')
            alert('Please upload a JPG or PNG file.');
        }
    }

    const handleSubmit = async (e) => {
        console.log(image);
    }

    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Add image in your {formName}!
            </Typography>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        accept=".jpg,.jpeg,.png" //this is useless at my side
                        onDone={handleFileUpload}
                    />
                </div>
                <Typography id="modal-modal-description">{fileMessage}</Typography>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="medium" type="submit" fullWidth>Submit</Button>
            </form>
        </>
      )
}

export default Form;
/*
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Please upload file in format jpg or png only. 
                Recommended image ratio is 1:1
            </Typography>
 */