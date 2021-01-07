import React from "react";
import {
    TOGGLE_MOBILE,
} from '../actions/menu';
import HomeIcon from "../components/Icons/HomeIcon";

const initState  = {
    toggleMobile: false,
    toggleAccounts: true,
    toggleNotifications: false,
    toggleProfile: false,
    toggleLanguage: false,
    menuItems: [
        {
            name: "Dashboard",
            title: "Estado de cuenta",
            routes: ["/"],
            routeTo: "/",
            icon: <HomeIcon/>
        },
        {
            name: "Settings",
            title: "Configuraciones",
            routes: ["/configuracion"],
            routeTo: "/configuracion",
            icon: <HomeIcon/>
        },
    ]
};

const menuReducer = (state = initState, action) => {
    switch(action.type){
        case TOGGLE_MOBILE:
            return {...state, toggleMobile: !state.toggleMobile};
        default:
            return state;
    }
};

export default menuReducer;
