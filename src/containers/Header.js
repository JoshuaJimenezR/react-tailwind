import { connect } from 'react-redux';
import Header from '../components/Header';
import {
    toggleAccounts,
    toogleMenuMobile
} from '../actions/menu';

const stateToProps = state => ({
    enableAccountsMenu: state.menu.toggleAccounts,
    companyAccounts: state.accounts,
});

const dispatchToProps = dispatch => ({
    toggleAccountMenu: () => dispatch(toggleAccounts()),
    toggleMobileMenu: () => dispatch(toogleMenuMobile())
});

export default connect(stateToProps, dispatchToProps)(Header);
