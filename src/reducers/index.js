import { combineReducers } from "redux";

import menu from './menu';
import accounts from './accounts';
import isLogged from './isLogged';

const rootReducers = combineReducers({
    menu,
    accounts,
    isLogged
});

export default rootReducers;
