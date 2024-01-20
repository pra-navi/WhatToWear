import { ADD_TOP, ADD_BOTTOM, ADD_FULL, GET_BOTTOM, GET_TOP, GET_FULL} from '../constants/actions';

const wardrobeReducer = (state = { tops: [], bottoms: [], fullOutfits: [] }, action) => {
    switch (action.type) {
        case ADD_TOP:
            console.log([...state.tops, action.payload]);
            return { ...state, tops: [...state.tops, action.payload]};
        case ADD_BOTTOM: 
            console.log([...state.bottoms, action.payload]);
            return { ...state, bottoms: [...state.bottoms, action.payload]};
        case ADD_FULL:
            console.log([...state.fullOutfits, action.payload]);
            return { ...state, fullOutfits: [...state.fullOutfits, action.payload]};
        
        case GET_TOP: 
            // console.log([...state.tops, action.payload]);
            return { ...state, tops: action.payload};
        
        case GET_BOTTOM: 
            return { ...state, bottoms: action.payload};
        
        case GET_FULL:
            return { ...state, fullOutfits: action.payload};

        default:
            return state;
    }
};

export default wardrobeReducer;