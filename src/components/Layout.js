import React, {Component} from 'react';
import PropTypes from "prop-types";

import {Redirect, Route, Switch} from "react-router-dom";

import Wrapper from './ui/Content/wrapper';
import Header from "../containers/Header";

import SideBar from "./ui/Navigation/SideBar";
import MobileMenu from "./ui/Navigation/MobileMenu";

import NotFound from "../containers/NotFound";
import LoginForm from "../containers/LoginForm";
import Dashboard from "../containers/Dashboard";
import Configuration from "../containers/Configuration";

class Layout extends Component {

    handleToggleMobileMenu = () => {
        this.props.toggleMobileMenu()
    };

    render() {
        const { menuItems, enableMobileMenu } = this.props;

        return (
            <Wrapper>
                <SideBar menuItems={menuItems} toggleMobileMenu={this.handleToggleMobileMenu}/>
                <MobileMenu enableMobileMenu={enableMobileMenu} toggleMobileMenu={this.handleToggleMobileMenu} menuItems={menuItems}/>

                <div className="flex flex-col flex-1 w-full">
                    <Header/>
                    <main className="h-full overflow-y-auto mt-5">
                        <Switch>
                            <Route path="/configuracion" component={Configuration} />
                            <Route path="/not-found" component={NotFound} />
                            <Route path="/login" component={LoginForm} />
                            <Route path="/" exact component={Dashboard} />
                            <Redirect to="/not-found" />
                        </Switch>
                    </main>
                </div>
            </Wrapper>
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
