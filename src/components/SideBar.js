import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../Icons/HomeIcon';

const menuItems = [
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
    {
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
    },
];

class SideBar extends Component {

    render() {

        function activeMenuItem (path){
            return path.includes(window.location.pathname);
        }

        return (
            <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
                <div className="py-4 text-gray-500 dark:text-gray-400">
                    <Link className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="/">
                        ZotaCard
                    </Link>
                    <ul className="mt-6">
                        {menuItems.map((item) => (
                            <li className="relative px-6 py-3">
                                {activeMenuItem(item.routes) &&
                                    <span
                                        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                                        aria-hidden="true"
                                    />
                                }
                                <Link
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
        </aside>
        );
    }
}

export default SideBar;
