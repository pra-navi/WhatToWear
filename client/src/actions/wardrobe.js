import { ADD_TOP, DELETE_TOP } from '../constants/actions';
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

export const deleteTop = (deleteId) => async (dispatch) => {
    try {
        console.log("action1");
        console.log(deleteId);
        await api.deleteTop({ topId: deleteId }); //let data be the object deleted top
        console.log("action2");
        dispatch({ type: DELETE_TOP, payload: deleteId });
    } catch (error) {
        console.log(error);
    }
};