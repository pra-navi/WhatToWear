import React, { useEffect, useState } from 'react';
import {
  FormControl,InputLabel, Select, MenuItem, Typography, Box, Switch, Button,
  Icon, IconButton, Menu, Grid, Card, CardActionArea, CardMedia, FormGroup, 
  FormControlLabel
} from '@mui/material';
import { getTops, getBottoms, getCurr, getFull, getPrev, refresh, update } from '../../actions/outfits';
import { useDispatch, useSelector } from 'react-redux';
import { getState } from 'redux';

const Outfits = () => {
  const [currTop, setCurrTop] = useState([]);
  const [lastTop, setLastTop] = useState([]);
  const [currBottom, setCurrBottom] = useState([]);
  const [lastBottom, setLastBottom] = useState([]);
  const [currFull, setCurrFull] = useState([]);
  const [currDay, setCurrDay] = useState([]);
  const [lastDay, setLastDay] = useState([]);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openTop, setOpenTop] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);
  const [openFull, setOpenFull] = useState(false);
  const [showThisWeekSingleImage, setShowThisWeekSingleImage] = useState(false);
  const dispatch = useDispatch();
  const { outfits } = useSelector((state) => state.outfits);
  const [result, setResult] = useState([]);

  const user = JSON.parse(localStorage.getItem('profile'));

  const placeholderImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png';

  const userId = user.result._id;
  const [topImages, setTopImages] = useState([]);
  const [bottomImages, setBottomImages] = useState([]);
  const [fullImages, setFullImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await dispatch(getTops(userId));
        setTopImages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [dispatch, userId]);

  useEffect(() => {
    const getImagesB = async () => {
      try {
        const data = await dispatch(getBottoms(userId));
        setBottomImages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getImagesB();
  }, [dispatch, userId]);

  useEffect(() => {
    const getImagesF = async () => {
      try {
        const data = await dispatch(getFull(userId));
        setFullImages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getImagesF();
  }, [dispatch, userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getCurr(currDay, user.result._id));
        console.log("response: ", response);
        console.log(response[1][1], response[2][1], response[3][1]);
        setResult(response);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (currDay && user.result._id) {
      fetchData();
    }
  }, [currDay, user.result._id, dispatch, result]);

  const handleLastDayChange = async (event) => {
    const newLastDay = event.target.value;
    setLastDay(newLastDay);
    try {
      const data = await dispatch(getPrev({ day: newLastDay, userId: user.result._id}));
      if (data[0][0] === "1") {
        setLastTop(data[3][1]);
        setLastBottom([]);
      } else {
        setLastTop(data[1][1]);
        setLastBottom(data[2][1]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCurrDayChange = (event) => {
    setCurrDay(event.target.value);
  };

  const handleTopClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenTop(true);
  }

  const handleBottomClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenBottom(true);
  }

  const handleFullClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenFull(true);
  }

  const handleTopSelect = (top) => {
    setCurrTop(top);
    handleClose();
  }

  const handleBottomSelect = (bottom) => {
    setCurrBottom(bottom);
    handleClose();
  }

  const handleFullSelect = (full) => {
    setCurrFull(full);
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpenTop(false);
    setOpenBottom(false);
    setOpenFull(false);
  }

  const toggleThisWeekImages = () => {
    setShowThisWeekSingleImage(!showThisWeekSingleImage);
  };

  const handleRefreshClick = async () => {
    const data = await dispatch(refresh(user.result._id));
    console.log(data);
  };

  const ImageMenu = ({ type, images }) => {
    const dispatch = useDispatch();
    const handleImageSelect = (selectedImage) => {
      // Assuming the selectedImage has _id and image properties
      if (type === 'top') {
        dispatch(update('top', selectedImage._id, userId, currDay));
      } else if (type === 'bottom') {
        dispatch(update('bottom', selectedImage._id, userId, currDay));
      } else if (type === 'full') {
        dispatch(update('full', selectedImage._id, userId, currDay));
      }
    };

    return (
      <Grid container spacing={2}>
        {images.map((item) => (
          <Grid item key={item._id} xs={12} sm={12} md={12} lg={2}>
            <Card>
              <CardActionArea onClick={() => handleImageSelect(item)}>
                <CardMedia
                  component="img"
                  alt={`Image ${item._id}`}
                  height="140"
                  image={item.image}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box style={{ display: 'flex', justifyContent:'center' }}>
      <Box 
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          marginRight: '15%',
        }}
      >       
        <Typography variant="h4" align="center">
          Last Week
        </Typography>

        <div>
          <IconButton disabled>
            <img src={lastTop.length > 0 ? lastTop : placeholderImg} alt='Top picture' />
          </IconButton>
        </div>
        <div>
          <IconButton disabled>
          <img src={lastBottom.length > 0 ? lastBottom : placeholderImg} alt='Bottom picture' />
          </IconButton>
        </div>
        <FormControl sx={{marginTop: '20px'}}>
        <InputLabel id="lastWeekDayLabel">Day</InputLabel>     
          <Select
            labelId="lastWeekDayLabel"
            id="lastWeekDay"
            value={lastDay}
            label="Day"
            onChange={handleLastDayChange}
          >
            <MenuItem value={'M'}>Monday</MenuItem>
            <MenuItem value={'Tu'}>Tuesday</MenuItem>
            <MenuItem value={'W'}>Wednesday</MenuItem>
            <MenuItem value={'Th'}>Thursday</MenuItem>
            <MenuItem value={'F'}>Friday</MenuItem>
            <MenuItem value={'Sa'}>Saturday</MenuItem>
            <MenuItem value={'Su'}>Sunday</MenuItem>
          
          </Select>
        </FormControl>
      </Box>
      
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '15%'
        }}
      >
          
        <Typography variant="h4" align="center">
          This Week
        </Typography>

        { currDay.length > 0 ? (
          <div>
            { showThisWeekSingleImage ? (
              <>
                <div>
                  <IconButton
                    onClick={handleFullClick}
                    aria-controls={openFull ? 'fulls-menu' : undefined}
                  >
                  <img
                    src={currFull}
                    alt='Click to choose a one-piece' />
                  </IconButton>
                </div>

                <Menu
                  anchorEl={anchorEl}
                  id="fulls-menu"
                  open={openFull}
                  onClose={handleClose}
                  onClick={handleClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                  <MenuItem onClick={handleClose}>
                    <ImageMenu type={'full'} images={fullImages} />
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <div>
                  <IconButton
                    onClick={handleTopClick}
                    aria-controls={openTop ? 'tops-menu' : undefined}
                  >
                  <img
                    src={currTop}
                    alt='Click to choose a top' />
                  </IconButton>
                </div>

                <Menu
                  anchorEl={anchorEl}
                  id="tops-menu"
                  open={openTop}
                  onClose={handleClose}
                  onClick={handleClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                  <MenuItem onClick={handleClose}>
                    <ImageMenu type={'top'} images={topImages} />
                  </MenuItem>
                </Menu>

                <div>
                  <IconButton
                    onClick={handleBottomClick}
                    aria-controls={openBottom ? 'bottoms-menu' : undefined}
                  >
                    <img
                      src={currBottom}
                      alt='Click to choose a bottom' />
                  </IconButton>
                </div>

                <Menu
                  anchorEl={anchorEl}
                  id="bottoms-menu"
                  open={openBottom}
                  onClose={handleClose}
                  onClick={handleClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                  <MenuItem onClick={handleClose}>
                    <ImageMenu type={'bottom'} images={bottomImages} />
                  </MenuItem>
                </Menu>
              </>
            )}
          </div>
        ) : (
          <>

            <div>
              <IconButton disabled>
                <img src={placeholderImg} alt='Top picture' />
              </IconButton>
            </div>
            <div>
              <IconButton disabled>
                <img src={placeholderImg} alt='Bottom picture' />
              </IconButton>
            </div>
          </>
        )}
          
        <FormControl sx={{marginTop: '20px'}}>
          <InputLabel id="currWeekDay">Day</InputLabel>
          <Select
            labelId="currWeekDayLabel"
            id="currWeekDay"
            label="Day"
            value={currDay}
            onChange={handleCurrDayChange}
          >
            <MenuItem value={'M'}>Monday</MenuItem>
            <MenuItem value={'Tu'}>Tuesday</MenuItem>
            <MenuItem value={'W'}>Wednesday</MenuItem>
            <MenuItem value={'Th'}>Thursday</MenuItem>
            <MenuItem value={'F'}>Friday</MenuItem>
            <MenuItem value={'Sa'}>Saturday</MenuItem>
            <MenuItem value={'Su'}>Sunday</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <FormGroup>
        <FormControlLabel 
          control={
            <Switch
              checked={showThisWeekSingleImage}
              onChange={toggleThisWeekImages}
              color="primary"
            />
          }
          label = {showThisWeekSingleImage ? "1-piece" : "2-piece"}
          labelPlacement="bottom"
        />
      </FormGroup>
      
      <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end', 
        marginTop: '20px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        }}
      >
        <Button variant="contained" onClick={handleRefreshClick}>
          New Week
        </Button>
      </Box>
    </Box>
  );
}

export default Outfits;
