import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    row: {
        padding: '15px', 
        borderRadius: '15px', 
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    },
    leftRight: {
        display: 'flex', 
        alignItems: 'center'
    },
    atRight: {
        padding: '10px', 
        borderRadius: '5px', 
        marginLeft: 'auto', 
        justifyContent: "center", 
    },
    myPostsButton: {
        size: "large",  
        variant: "contained", 
        color: "white", 
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: '#5E545E', 
    },
}));