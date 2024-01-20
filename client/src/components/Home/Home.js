import React from 'react';
import { Button, Typography, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <Typography variant="h3" component="h2" className={classes.homeText}>
        Let's Style You Up!
      </Typography>

      <Divider style={{ margin: '20px 0 20px 0' }} />

      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="white"
          onClick={() => history.push('./outfits/outfits')}
          className={classes.button}
        >
          Outfits
        </Button>
        <Button
          variant="contained"
          color="white"
          onClick={() => history.push('./wardrobe/wardrobe')}
          className={classes.button}
        >
          Wardrobe
        </Button>
      </div>
    </div>
  );
}

export default Home;