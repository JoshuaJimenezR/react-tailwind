import React, {Component} from 'react';
import HamburgerIcon from '../Icons/HamburgerIcon';
import NotificationsIcon from '../Icons/NotificationsIcon';
import SearchIcon from "../Icons/SearchIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";
import DropDownMenu from "./DropDownMenu";

const vendorsMenu = [
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
    },
];

class Header extends Component {
    render() {
        return (
            <header className="z-10 py-4 bg-white dark:bg-gray-800">
                <div
                    className="flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                    <button
                        className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                        aria-label="Menu">
                        <HamburgerIcon/>
                    </button>
                    <div className="flex justify-center flex-1 lg:mr-32">
                        <div
                            className="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
                        >
                            <div className="absolute inset-y-0 flex items-center pl-2">
                                <SearchIcon />
                            </div>
                            <input
                                className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                type="text"
                                placeholder="Buscar Transacciones, Comisiones, ZotaCash."
                                aria-label="Search"
                            />
                        </div>
                    </div>
                    <ul className="flex items-center flex-shrink-0 space-x-6">
                        <li className="relative">
                            <button type="button"
                                    className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                <span>ZotaCard</span>
                                <DownArrowIcon/>
                            </button>
                            { false &&
                                <DropDownMenu options={vendorsMenu}/>
                            }
                        </li>
                        <li className="relative">
                            <button
                                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                                aria-label="Notifications"
                                aria-haspopup="true"
                            >
                                <NotificationsIcon/>
                            </button>
                        </li>
                        <li className="relative">
                            <button
                                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                                aria-label="Account"
                                aria-haspopup="true"
                            >
                                <img
                                    className="object-cover w-8 h-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                                    alt=""
                                    aria-hidden="true"
                                />
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
