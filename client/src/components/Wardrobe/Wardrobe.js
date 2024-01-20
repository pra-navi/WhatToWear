import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { Paper, Typography, Divider } from '@material-ui/core';

import WardrobeRow from './WardrobeRow/WardrobeRow';
import { getBottoms, getTops, getFull } from '../../actions/outfits';

const Wardrobe = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem('profile'))?.result._id;
  
  useEffect(() => {
    dispatch(getTops(userId));
    dispatch(getBottoms(userId));
    dispatch(getFull(userId));
  }, []);

  const { tops, bottoms, fullOutfits } = useSelector((state) => state.wardrobe);

  const addFunction = () =>  {console.log("hi")};

  return (
    <>
      <Typography variant="h3" component="h2">My Wardrobe</Typography>
      <Divider style={{ margin: '20px 0 20px 0' }} />
      <WardrobeRow rowName="Tops" addFunc={addFunction} clothesArr={tops}/>
      <Divider style={{ margin: '20px 0 20px 0' }} />
      <WardrobeRow rowName="Bottoms" addFunc={addFunction} clothesArr={bottoms}/>
      <Divider style={{ margin: '20px 0 20px 0' }} />
      <WardrobeRow rowName="FullOutfits" addFunc={addFunction} clothesArr={fullOutfits}/>
      <Divider style={{ margin: '20px 0 20px 0' }} />
    </>
  )
}

export default Wardrobe;