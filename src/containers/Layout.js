import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Layout from '../components/Layout';
import {
    toogleMenuMobile,
    toggleAccounts
} from '../actions/menu';

const stateToProps = state => ({
    menuItems: state.menu.menuItems,
    enableMobileMenu: state.menu.toggleMobile,
});

const dispatchToProps = dispatch => ({
    toggleMobileMenu: () => dispatch(toogleMenuMobile())
});

export default withRouter(connect(stateToProps, dispatchToProps)(Layout));
