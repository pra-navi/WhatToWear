import React from 'react';
import useStyles from './styles';
import { Paper, Typography, Divider, IconButton, Modal, Box } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Hangers from './Hangers/Hangers';
import Form from './Form/Form'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const WardrobeRow = ({rowName, addFunc, clothesArr}) => {
    const classes = useStyles();

    
    const [openForm, setOpenForm] = React.useState(false);
    const handleOpen = () => setOpenForm(true);
    const handleClose = () => setOpenForm(false);

    console.log(clothesArr);

    return (
        <>
            <Paper className={classes.row} elevation={6}>
                <div className={classes.leftRight}>
                    <Typography variant="h4" component="h2">{rowName}</Typography>
                    <div className={classes.atRight}>
                        <IconButton size='medium'onClick={handleOpen}>
                            <AddCircleIcon />
                        </IconButton>
                    </div>
                </div>
                <Hangers/> 
            </Paper>
            <Modal
                open={openForm}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Form addFunc={addFunc} formName={rowName}/>
                </Box>
            </Modal>
    </>
  )
}

export default WardrobeRow

/*
                    

*/