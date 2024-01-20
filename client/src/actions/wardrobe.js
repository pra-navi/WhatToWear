import { ADD_TOP } from '../constants/actions';
import * as api from '../api';

export const addTop = (image) => async (dispatch) => {
    try {
        console.log(image);
        const { data } = await api.addTop(image); //let data be the object of newly added top
        dispatch({ type: ADD_TOP, payload: data });
    } catch (error) {
        console.log(error);
    }
};