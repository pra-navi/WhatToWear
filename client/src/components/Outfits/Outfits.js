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
  const [showLastWeekSingleImage, setShowLastWeekSingleImage] = useState(false);
  const [showThisWeekSingleImage, setShowThisWeekSingleImage] = useState(false);
  const dispatch = useDispatch();
  const { outfits } = useSelector((state) => state.outfits);

  const user = JSON.parse(localStorage.getItem('profile'));
  // const setOutfits = () => {
    // sets both current and last week's outfits upon opening
    // req: userId, day
    // returns type, top, bottom, full 
  // }
  const placeholderTops = [
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455762/item/goods_03_455762.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466087/sub/goods_466087_sub14.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/458355/item/goods_01_458355.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/457479/item/goods_18_457479.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464437/item/goods_00_464437.jpg?width=200'
  ];

  const placeholderBottoms = [
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468841/item/goods_05_468841.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464887/sub/goods_464887_sub14.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466384/sub/goods_466384_sub14.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464912/sub/goods_464912_sub14.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464945/sub/goods_464945_sub14.jpg?width=200'
  ];

  const placeholderFulls = [
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466542/item/goods_54_466542.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464787/sub/goods_464787_sub14.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/463509/item/goods_09_463509.jpg?width=200',
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466523/sub/goods_466523_sub14.jpg?width=200'
  ];

  // const handleTopClick = () => {
    // open pop-up
  // }
  // const handleBottomClick = () => {
    // open pop-up
  // }

  const placeholderImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png';
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
    return (
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={12} md={12} lg={2}>
            <Card>
              <CardActionArea onClick={() => {
                if (type === 'top') {
                  handleTopSelect(image);
                } else if (type === 'bottom') {
                  handleBottomSelect(image);
                } else if (type === 'full') {
                  handleFullSelect(image);
                }
                }}>
                <CardMedia
                  component="img"
                  alt={`Image ${index + 1}`}
                  height="140"
                  image={image}
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
                <ImageMenu type={'full'} images={placeholderFulls} />
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
                <ImageMenu type={'top'} images={placeholderTops} />
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
                <ImageMenu type={'bottom'} images={placeholderBottoms} />
              </MenuItem>
            </Menu>
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
