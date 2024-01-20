import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Input, Typography, Box } from '@mui/material';

const Outfits = () => {
  const [currTop, setCurrTop] = useState([]); // 1-piece will be considered a top
  const [lastTop, setLastTop] = useState([]);
  const [currBottom, setCurrBottom] = useState([]);
  const [lastBottom, setLastBottom] = useState([]);
  const [currFull, setCurrFull] = useState([]);
  const [lastFull, setLastFull] = useState([]);
  const [currDay, setCurrDay] = useState([]);
  const [lastDay, setLastDay] = useState([]);
  const [open, setOpen] = useState(false);

  // const setOutfits = () => {
    // sets both current and last week's outfits upon opening
    // req: userId, day
    // returns type, top, bottom, full 
  // }

  // const handleTopClick = () => {
    // open pop-up
  // }
  // const handleBottomClick = () => {
    // open pop-up
  // }

  // last week view outfit

  // select day

  // reset week button

  const placeholderImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png';
  const handleLastDayChange = (event) => {
    setLastDay(event.target.value);
  };
  
  const handleCurrDayChange = (event) => {
    setCurrDay(event.target.value);
  };

  const handleTopClick = () => {
    console.log("Top clicked");
    setOpen(true);
  }

  const handleBottomClick = () => {
    console.log("Bottom clicked");
  }

  return (
    <Box style={{ display: 'flex', justifyContent:'center' }}>
      <Box style={{ 
        display: 'flex',
        flexDirection: 'column',
        marginRight: '15%'
      }}>       
        <Typography variant="h4" align="center">Last Week</Typography>
        <div><img src={placeholderImg} alt='Top picture' /></div>
        <div><img src={placeholderImg} alt='Bottom picture' /></div>
        <FormControl sx={{marginTop: '20px'}}>
        <InputLabel id="lastWeekDayLabel">Day</InputLabel>     
          <Select
            labelId="lastWeekDayLabel"
            id="lastWeekDay"
            value={lastDay}
            label="Day"
            onChange={handleLastDayChange}
          >
            <MenuItem value={'lastM'}>Monday</MenuItem>
            <MenuItem value={'lastTu'}>Tuesday</MenuItem>
            <MenuItem value={'lastW'}>Wednesday</MenuItem>
            <MenuItem value={'lastTh'}>Thursday</MenuItem>
            <MenuItem value={'lastF'}>Friday</MenuItem>
            <MenuItem value={'lastSa'}>Saturday</MenuItem>
            <MenuItem value={'lastSu'}>Sunday</MenuItem>
          </Select>
        </FormControl>

      </Box>
      <Box style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '15%'
      }}>
        <Typography variant="h4" align="center">This Week</Typography>
        <div>
          <img
            src={placeholderImg}
            onClick={handleTopClick}
            alt='Top picture' />
        </div>
        <div>
          <img
            src={placeholderImg}
            onClick={handleBottomClick}
            alt='Bottom picture' />
          </div>
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
    </Box>
  )
}

export default Outfits