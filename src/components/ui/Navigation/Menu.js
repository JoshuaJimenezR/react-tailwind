import React, {Component} from 'react';
import {Link} from "react-router-dom";

const { REACT_APP_WEBSITE_NAME } = process.env;

class Menu extends Component {

    handleSelectItem = () => {
        this.props.toggleMobileMenu()
    };

    render() {
        const { menuItems } = this.props;

        return (
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <Link
                    onClick={this.handleSelectItem}
                    className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    to="/"
                >
                    {REACT_APP_WEBSITE_NAME}
                </Link>
                <ul className="mt-6">
                    {menuItems.map((item) => (
                        <li key={item.title} className="relative px-6 py-3">
                            <Link
                                onClick={this.handleSelectItem}
                                className="inline-flex items-center w-full text-sm text-gray-800 font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                                to={ item.routeTo }
                            >
                                {item.icon}
                                <span className="ml-4">{ item.title }</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Menu;
