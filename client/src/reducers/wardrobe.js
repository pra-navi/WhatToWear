import { ADD_TOP } from '../constants/actions';

const wardrobeReducer = (state = { tops: null, bottoms: null, fullOutfits: null }, action) => {
    switch (action.type) {
        case ADD_TOP:
            return { ...state, tops: [...state.tops, action.payload]};
        default:
            return state;
    }
};

export default wardrobeReducer;