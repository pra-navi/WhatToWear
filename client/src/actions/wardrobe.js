import { ADD_TOP } from '../constants/actions';
import * as api from '../api';

export const addTop = (testImage) => async (dispatch) => {
    try {
        console.log(testImage);
        const { data } = await api.addTop({ image: testImage }); //let data be the object of newly added top
        dispatch({ type: ADD_TOP, payload: data });
    } catch (error) {
        console.log(error);
    }
};