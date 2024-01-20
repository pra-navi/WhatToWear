import { UPDATE } from '../constants/actions';

const outfitsReducer = (state = { lastM: [], lastTu: [], lastW: [], lastTh: [], lastF: [], lastSa: [], lastSu: [], M: [], Tu: [], W: [], Th: [], F: [], Sa: [], Su: [] }, action) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                lastM: action.payload.lastM,
                lastTu: action.payload.lastTu,
                lastW: action.payload.lastW,
                lastTh: action.payload.lastTh,
                lastF: action.payload.lastF,
                lastSa: action.payload.lastSa,
                lastSu: action.payload.lastSu,
                M: action.payload.M,
                Tu: action.payload.Tu,
                W: action.payload.W,
                Th: action.payload.Th,
                F: action.payload.F,
                Sa: action.payload.Sa,
                Su: action.payload.Su,
            };
        default:
            return state;
    }
};

export default outfitsReducer;