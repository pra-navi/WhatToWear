import React from 'react'
import useStyles from './styles';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

/**
 * @author https://v4.mui.com/components/image-list/ 
 */

const Hangers = ({rowName, clothesArr}) => {
    const classes = useStyles();

    const deleteFunc = () => {alert("Feature Coming Soon!");}

    console.log(rowName);
    console.log(clothesArr);

    if(clothesArr.length === 0) {
      return (
        <Typography variant="h5" component="h2">There's nothing in your {rowName}</Typography>
      )
    }

    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={2.5}>
                {clothesArr.map((item) => (
                    <ImageListItem key={item._id}>
                        <img src={item.image} alt={item._id} className={classes.image}/>
                        <ImageListItemBar
                            // title={item.title}
                            // classes={{
                            //     root: classes.titleBar,
                            //     title: classes.title,
                            // }}
                            actionIcon={
                                <IconButton aria-label={`star ${item._id}`} onClick={deleteFunc}>
                                    <DeleteIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}



const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast'
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger'
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera'
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee'
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats'
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey'
    }
  ]

export default Hangers