import React from 'react';
import useStyles from './styles';
import { Paper, Typography, Divider } from '@material-ui/core';

import WardrobeRow from './WardrobeRow/WardrobeRow';

const Wardrobe = () => {
  const classes = useStyles();

  const addFunction = () =>  {console.log("hi")};

  return (
    <>
      <Typography variant="h3" component="h2">My Wardrobe</Typography>
      <Divider style={{ margin: '20px 0 20px 0' }} />
      <WardrobeRow rowName="Tops" addFunc={addFunction}/>
      <Divider style={{ margin: '20px 0 20px 0' }} />
      <WardrobeRow rowName="Bottoms" addFunc={addFunction}/>
      <Divider style={{ margin: '20px 0 20px 0' }} />
      <WardrobeRow rowName="FullOutfits" addFunc={addFunction}/>
      <Divider style={{ margin: '20px 0 20px 0' }} />
    </>
  )
}

export default Wardrobe;