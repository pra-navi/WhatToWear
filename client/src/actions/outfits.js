import { GET_BOTTOM, GET_CURR, GET_FULL, GET_PREV, GET_TOP, UPDATE } from '../constants/actions';
import * as api from '../api';

export const refresh = (id) => async (dispatch) => {
    try {
        const { data } = await api.refresh(id);

        dispatch({ type: UPDATE, payload: data });
        return data;
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

export const getTops = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getAllTops(userId);
        
        dispatch({ type: GET_TOP, payload: data });
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getBottoms = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getAllBottoms(userId);
        
        dispatch({ type: GET_BOTTOM, payload: data });
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getFull = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getAllFull(userId);
        
        dispatch({ type: GET_FULL, payload: data });
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getPrev = ({ day, userId }) => async (dispatch) => {
    try {
        const { data } = await api.getPrevOutfits(day, userId);
        
        dispatch({ type: GET_PREV, payload: data });

        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getCurr = (day, userId) => async (dispatch) => {
    try {
        const { data } = await api.getCurrOutfits(day, userId);
        
        dispatch({ type: GET_CURR, payload: data });
        return data;
    } catch (error) {
        console.log(error.message);
    }
};