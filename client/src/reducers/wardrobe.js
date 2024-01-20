import { ADD_TOP } from '../constants/actions';

const wardrobeReducer = (state = { tops: [], bottoms: [], fullOutfits: [] }, action) => {
    switch (action.type) {
        case ADD_TOP:
            console.log([...state.tops, action.payload]);
            return { ...state, tops: [...state.tops, action.payload]};
        default:
            return state;
    }
};

export default wardrobeReducer;