import { GET_BOTTOM, GET_CURR, GET_FULL, GET_PREV, GET_TOP } from '../constants/actions';
import * as api from '../api';

export const getTops = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getAllTops(userId);
        
        dispatch({ type: GET_TOP, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const getBottoms = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getAllBottoms(userId);
        
        dispatch({ type: GET_BOTTOM, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const getFull = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getAllFull(userId);
        
        dispatch({ type: GET_FULL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const getPrev = (day, userId) => async (dispatch) => {
    try {
        const { data } = await api.getPrevOutfits(day, userId);
        
        dispatch({ type: GET_PREV, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const getCurr = (day, userId) => async (dispatch) => {
    try {
        const { data } = await api.getCurrOutfits(day, userId);
        
        dispatch({ type: GET_CURR, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
