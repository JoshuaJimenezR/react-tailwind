import React, {Component} from 'react';
import PropTypes from "prop-types";

import {Redirect, Route, Switch} from "react-router-dom";

import Header from "../containers/Header";

import SideBar from "./SideBar";
import MobileMenu from "./MobileMenu";
import TransactionDetails from "../pages/TransactionsDetails";
import TransactionsShow from "../pages/TransactionsShow";
import Transactions from "../pages/Transactions";
import Commissions from "../pages/Commissions";
import ZotaCash from "../pages/ZotaCash";
import VendorDirectory from "../pages/VendorDirectory";
import Configuration from "../pages/Configuration";
import NotFound from "../pages/NotFound";
import LoginForm from "../pages/LoginForm";
import Dashboard from "../pages/Dashboard";
import {toogleMenuMobile} from "../actions/menu";

class Layout extends Component {

    handleToggleMobileMenu = () => {
        this.props.toggleMobileMenu()
    };

    render() {
        const { menuItems, enableMobileMenu } = this.props;

        return (
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
                <SideBar menuItems={menuItems} toggleMobileMenu={this.handleToggleMobileMenu}/>
                <MobileMenu enableMobileMenu={enableMobileMenu} toggleMobileMenu={this.handleToggleMobileMenu} menuItems={menuItems}/>

                <div className="flex flex-col flex-1 w-full">
                    <Header/>
                    <main className="h-full overflow-y-auto mt-5">
                        <Switch>
                            <Route path="/transacciones/details/:id" component={TransactionDetails} />
                            <Route path="/transacciones/show/:id" component={TransactionsShow} />
                            <Route path="/transacciones" component={Transactions} />
                            <Route path="/comisiones" component={Commissions} />
                            <Route path="/zotacash" component={ZotaCash} />
                            <Route path="/directorio-empresas" component={VendorDirectory} />
                            <Route path="/configuracion" component={Configuration} />
                            <Route path="/not-found" component={NotFound} />
                            <Route path="/login" component={LoginForm} />
                            <Route path="/" exact component={Dashboard} />
                            <Redirect to="/not-found" />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

Layout.propTypes  = {
    menuItems: PropTypes.array,
    enableMobileMenu: PropTypes.bool,
    enableAccountsMenu: PropTypes.array,
};

Layout.defaultProps = {
    toggleMobileMenu: false
};

export default Layout;
