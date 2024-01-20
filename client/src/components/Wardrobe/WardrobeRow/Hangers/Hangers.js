import React from 'react'
import useStyles from './styles';
import { ImageList, ImageListItem, ImageListItemBar, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTop } from '../../../../api';
import { useDispatch } from 'react-redux';

/**
 * @author https://v4.mui.com/components/image-list/ 
 */

const Hangers = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const deleteFunc = async () => {
      try {
        console.log("hangers1");
        await dispatch(deleteTop('65abd8c6435eda6301c6d279'));
        console.log("hangers2");
      } catch(error) {
        console.log(error);
      }
    }

    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={2.5}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            // title={item.title}
                            // classes={{
                            //     root: classes.titleBar,
                            //     title: classes.title,
                            // }}
                            actionIcon={
                                <IconButton aria-label={`star ${item.title}`} onClick={deleteFunc}>
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