import React from 'react';
import Menu from "./Menu";

const MobileMenu = ({ enableMobileMenu, menuItems, toggleMobileMenu }) => {
    return (
        <React.Fragment>
            { enableMobileMenu &&
                <aside className="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
                    <Menu menuItems={menuItems} toggleMobileMenu={toggleMobileMenu}/>
                </aside>
            }
        </React.Fragment>
    );
};

export default MobileMenu;
