import { ADD_TOP, ADD_BOTTOM, ADD_FULL } from '../constants/actions';
import * as api from '../api';

export const addTop = (testImage) => async (dispatch) => {
    try {
        // console.log(testImage);
        const { data } = await api.addTop({ image: testImage }); //let data be the object of newly added top
        dispatch({ type: ADD_TOP, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const addBottom = (testImage) => async (dispatch) => {
    try {
        // console.log(testImage);
        const { data } = await api.addBottom({ image: testImage });
        dispatch({ type: ADD_BOTTOM, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const addFull = (testImage) => async (dispatch) => {
    try {
        // console.log(testImage);
        const { data } = await api.addFull({ image: testImage });
        dispatch({ type: ADD_FULL, payload: data });
    } catch (error) {
        console.log(error);
    }
};