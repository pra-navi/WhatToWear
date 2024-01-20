import { ADD_TOP, DELETE_TOP } from '../constants/actions';

const wardrobeReducer = (state = { tops: [], bottoms: [], fullOutfits: [] }, action) => {
    switch (action.type) {
        case ADD_TOP:
            console.log([...state.tops, action.payload]);
            return { ...state, tops: [...state.tops, action.payload]};
        case DELETE_TOP:
            const updatedTops = state.tops.filter(top => top._id !== action.payload);
            console.log(updatedTops);
            return { ...state, tops: updatedTops };
        default:
            return state;
    }
};

export default wardrobeReducer;