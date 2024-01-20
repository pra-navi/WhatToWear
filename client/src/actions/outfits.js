import * as api from '../api';

export const refresh = () => async (dispatch) => {
    try {
        const { data } = await api.refresh();

        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.message);
    }
}
