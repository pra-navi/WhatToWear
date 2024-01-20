import { combineReducers } from "redux";

import auth from "./auth";
import wardrobe from "./wardrobe";
import outfits from "./outfits";

const reducers = combineReducers({ auth, wardrobe, outfits });

export default reducers;