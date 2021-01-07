import { combineReducers } from "redux";

import menu from './menu';
import isLogged from './isLogged';

const rootReducers = combineReducers({
    menu,
    isLogged
});

export default rootReducers;
