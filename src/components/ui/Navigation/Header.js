import React, {Component} from 'react';
import PropTypes from "prop-types";

import Hamburger from "./Hamburger";
import Notifications from "./Notifications";
import Search from '../Search/Search';
import ProfilePicture from "./ProfilePicture";


class Header extends Component {
    handleToggleMobileMenu = () => {
        this.props.toggleMobileMenu()
    };

    render() {
        return (
            <header className="z-10 py-4 bg-white dark:bg-gray-800">
                <div
                    className="flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                    <Hamburger handleToggleMobileMenu={this.handleToggleMobileMenu}/>
                    <div className="flex justify-center flex-1 lg:mr-32">
                        <Search placeholder="Buscar Transacciones, Comisiones, ZotaCash."/>
                    </div>
                    <ul className="flex items-center flex-shrink-0 space-x-6">
                        <li className="relative">
                            <Notifications />
                        </li>
                        <li className="relative">
                            <ProfilePicture />
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

Header.propTypes  = {
    enableAccountsMenu: PropTypes.array,
};

Header.defaultProps = {
    toggleAccountMenu: false,
    toggleMobileMenu: false
};


export default Header;
