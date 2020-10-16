import React from "react";
import { TOGGLE_MOBILE_MENU } from '../actions/menu';
import HomeIcon from "../components/Icons/HomeIcon";

const initState  = [
    {
        title: "ZotaCard",
        description: "Cuenta Contable Principal"
    },
    {
        title: "ZotaCard Commissions",
        description: "Cuenta Contable Comisiones"
    },
    {
        title: "ZotaCard Gains and Losses",
        description: "Cuenta Contable ZotaCash"
    }
];

const accountsReducer = (state = initState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default accountsReducer;
