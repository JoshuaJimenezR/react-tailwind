import React from "react";
import {
    TOGGLE_MOBILE,
    TOGGLE_ACCOUNTS
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
            name: "Transacciones",
            title: "Transacciones",
            routes: ["/transacciones", "/transacciones/details"],
            routeTo: "/transacciones",
            icon: <HomeIcon/>
        },
        {
            name: "Comisiones",
            title: "Comisiones",
            routes: ["/comisiones"],
            routeTo: "/comisiones",
            icon: <HomeIcon/>
        },
        {
            name: "ZotaCash",
            title: "ZotaCash",
            routes: ["/zotacash"],
            routeTo: "/zotacash",
            icon: <HomeIcon/>
        },
        /*{
            name: "Directorio de empresas",
            title: "Directorio de empresas",
            routes: ["/directorio-empresas"],
            routeTo: "/directorio-empresas",
            icon: <HomeIcon/>
        },
        {
            name: "Configuracion",
            title: "Configuración",
            routes: ["/configuracion"],
            routeTo: "/configuracion",
            icon: <HomeIcon/>
        },*/
    ]
};

const menuReducer = (state = initState, action) => {
    switch(action.type){
        case TOGGLE_MOBILE:
            return {...state, toggleMobile: !state.toggleMobile};
        case TOGGLE_ACCOUNTS:
            return {...state, toggleAccounts: !state.toggleAccounts};
        default:
            return state;
    }
};

export default menuReducer;
