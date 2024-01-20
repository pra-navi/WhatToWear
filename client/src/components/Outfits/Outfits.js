import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Switch,
  Button,
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
  const [open, setOpen] = useState(false);
  const [showLastWeekSingleImage, setShowLastWeekSingleImage] = useState(false);
  const [showThisWeekSingleImage, setShowThisWeekSingleImage] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const placeholderImg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png';

  const handleLastDayChange = (event) => {
    setLastDay(event.target.value);
  };

  const handleCurrDayChange = (event) => {
    setCurrDay(event.target.value);
  };

  const handleTopClick = () => {
    console.log('Top clicked');
    setOpen(true);
  };

  const handleBottomClick = () => {
    console.log('Bottom clicked');
  };

  const toggleThisWeekImages = () => {
    setShowThisWeekSingleImage(!showThisWeekSingleImage);
  };

  //logic
  const handleRefreshClick = () => {
    setRefresh(!refresh);
  };

  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
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

        {showLastWeekSingleImage ? (
          <div>
            <img src={placeholderImg} alt="Last week outfit" />
          </div>
        ) : (
          <>
            <div>
              <img src={placeholderImg} alt="Top picture" />
            </div>
            <div>
              <img src={placeholderImg} alt="Bottom picture" />
            </div>
          </>
        )}

        <FormControl sx={{ marginTop: '20px' }}>
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
          marginLeft: '15%',
        }}
      >
        <Typography variant="h4" align="center">
          This Week
        </Typography>
        {showThisWeekSingleImage ? (
          <div>
            <img src={placeholderImg} alt="This week outfit" />
          </div>
        ) : (
          <>
            <div>
              <img
                src={placeholderImg}
                onClick={handleTopClick}
                alt="Top picture"
              />
            </div>
            <div>
              <img
                src={placeholderImg}
                onClick={handleBottomClick}
                alt="Bottom picture"
              />
            </div>
          </>
        )}
        <FormControl sx={{ marginTop: '20px' }}>
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

        <Switch
          checked={showThisWeekSingleImage}
          onChange={toggleThisWeekImages}
          color="primary"
        />
      </Box>
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
    Refresh
  </Button>
</Box>
    </Box>
  );
};

export default Outfits;
