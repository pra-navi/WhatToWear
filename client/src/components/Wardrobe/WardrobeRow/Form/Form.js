import React, { useState } from 'react'
import useStyles from './styles';
import { Paper, Typography, Divider, IconButton, Modal, Box, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addTop, addBottom, addFull } from '../../../../actions/wardrobe';

/**
 * @author https://mui.com/material-ui/react-modal/
 */

const Form = ({addFunc, formName}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

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
        e.preventDefault();

        if (image === null) {
            alert('Please select an image');
            return;
        }

        try {
            if (formName === "Tops") {
                console.log(formName);
                await dispatch(addTop(image));
            } else if (formName === "Bottoms") {
                console.log(formName);
                await dispatch(addBottom(image));
            } else if (formName === "FullOutfits") {
                console.log(formName);
                await dispatch(addFull(image));
            } else {
                alert('Something wrong');
            }
        } catch(error) {
            console.log(error);
        }
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
            if (formName === "Tops") {
                const user = JSON.parse(localStorage.getItem('profile')); // need to explicitly update this
                await dispatch(addTop(currentId, image));
            }
*/