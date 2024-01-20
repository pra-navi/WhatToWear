import * as api from '../api';
import { UPDATE } from '../constants/actions';

export const refresh = (id) => async (dispatch) => {
    try {
        const { data } = await api.refresh(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const update = (outfitType, clothesId, userId, day) => async (dispatch) => {
    try {
        const { data } = await api.update(outfitType, clothesId, userId, day);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}