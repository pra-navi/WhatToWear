import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        padding: '10px 50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0, 183, 255, 1)',
        textDecoration: 'none',
        fontFamily: 'Syne Variable, sans-serif',
        align: 'center',
    },
    image: {
        marginRight: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '20%'
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '20%',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20%',
        marginRight: '50%',
        color: "#000000"
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));