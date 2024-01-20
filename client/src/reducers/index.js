import { combineReducers } from "redux";

import auth from "./auth";
import wardrobe from "./wardrobe";

const reducers = combineReducers({ auth, wardrobe });

export default reducers;