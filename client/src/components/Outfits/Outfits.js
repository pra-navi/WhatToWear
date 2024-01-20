import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Input, Typography, Box } from '@mui/material';
import { getTops, getBottoms, getCurr, getFull, getPrev } from '../../actions/outfits';
import { useDispatch, useSelector } from 'react-redux';
import { getState } from 'redux';

const Outfits = () => {
  const [currTop, setCurrTop] = useState([]); // 1-piece will be considered a top
  const [lastTop, setLastTop] = useState([]);
  const [currBottom, setCurrBottom] = useState([]);
  const [lastBottom, setLastBottom] = useState([]);
  const [currFull, setCurrFull] = useState([]);
  const [currDay, setCurrDay] = useState([]);
  const [lastDay, setLastDay] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { outfits } = useSelector((state) => state.outfits);

  const user = JSON.parse(localStorage.getItem('profile'));

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
        <div><img src={lastTop.length > 0 ? lastTop[0] : placeholderImg} alt='Top picture' /></div>
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