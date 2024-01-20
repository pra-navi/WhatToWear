import { ADD_TOP, DELETE_TOP, GET_BOTTOM, GET_TOP, GET_FULL} from '../constants/actions';

const wardrobeReducer = (state = { tops: [], bottoms: [], fullOutfits: [] }, action) => {
    switch (action.type) {
        case ADD_TOP:
            console.log([...state.tops, action.payload]);
            return { ...state, tops: [...state.tops, action.payload]};
        case DELETE_TOP:
            const updatedTops = state.tops.filter(top => top._id !== action.payload);
            console.log(updatedTops);
            return { ...state, tops: updatedTops };
        
        case GET_TOP: 
            console.log([...state.tops, action.payload]);
            return { ...state, tops: [...state.tops, action.payload]};
        
        case GET_BOTTOM: 
            console.log([...state.bottoms, action.payload]);
            return { ...state, bottoms: [...state.bottoms, action.payload]};
        
        case GET_FULL:
            console.log([...state.fullOutfits, action.payload]);
            return { ...state, fullOutfits: [...state.fullOutfits, action.payload]};

        default:
            return state;
    }
};

export default wardrobeReducer;