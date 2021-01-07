import React from 'react';
import HamburgerIcon from "../../Icons/HamburgerIcon";

const Hamburger = ({handleToggleMobileMenu}) => {
    return (
        <button
            onClick={handleToggleMobileMenu}
            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
            aria-label="Menu">
            <HamburgerIcon/>
        </button>
    );
};

export default Hamburger;