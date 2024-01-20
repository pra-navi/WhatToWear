import React, { useState } from 'react';
import {
  FormControl,InputLabel, Select, MenuItem, Typography, Box, Switch, Button,
  Icon, IconButton, Menu, Grid, Card, CardActionArea, CardMedia
} from '@mui/material';

const Outfits = () => {
  const [currTop, setCurrTop] = useState([]);
  const [lastTop, setLastTop] = useState([]);
  const [currBottom, setCurrBottom] = useState([]);
  const [lastBottom, setLastBottom] = useState([]);
  const [currFull, setCurrFull] = useState([]);
  const [lastFull, setLastFull] = useState([]);
  const [currDay, setCurrDay] = useState([]);
  const [lastDay, setLastDay] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openTop, setOpenTop] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);
  const [showLastWeekSingleImage, setShowLastWeekSingleImage] = useState(false);
  const [showThisWeekSingleImage, setShowThisWeekSingleImage] = useState(false);
  const [refresh, setRefresh] = useState(false);

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
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/463509/item/goods_09_463509.jpg?width=200'
  ];

  const handleLastDayChange = (event) => {
    setLastDay(event.target.value);
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

  const handleTopSelect = (top) => {
    setCurrTop(top);
    handleClose();
  }

  const handleBottomSelect = (bottom) => {
    setCurrBottom(bottom);
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpenTop(false);
    setOpenBottom(false);
  }

  const toggleThisWeekImages = () => {
    setShowThisWeekSingleImage(!showThisWeekSingleImage);
  };

  const handleRefreshClick = () => {
    setRefresh(!refresh);
  };

  const ImageMenu = ({ type, images }) => {
    return (
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={12} md={12} lg={2}>
            <Card>
              <CardActionArea onClick={() => {
                if (type == 'top') {
                  handleTopSelect(image)
                } else if (type == 'bottom') {
                  handleBottomSelect(image)
                }}}>
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
            <img src={placeholderTops[0]} alt='Top picture' />
          </IconButton>
        </div>
        <div>
          <IconButton disabled>
          <img src={placeholderBottoms[0]} alt='Bottom picture' />
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
          <div>
            <img src={placeholderFulls[0]} alt="This week outfit" />
          </div>
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

      <Switch
        checked={showThisWeekSingleImage}
        onChange={toggleThisWeekImages}
        color="primary"
      />

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
