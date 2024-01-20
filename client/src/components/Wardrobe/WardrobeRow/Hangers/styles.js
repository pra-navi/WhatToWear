import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
    },
    imageList: {
        display: 'flex', 
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    image: {
        height: '50px',
    },
}));