import React from 'react';
import Menu from "./Menu";

const SideBar = ({menuItems, toggleMobileMenu}) => {
    return (
        <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <Menu menuItems={menuItems} toggleMobileMenu={toggleMobileMenu}/>
        </aside>
    );
};

export default SideBar;
