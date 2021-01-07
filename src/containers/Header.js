import { connect } from 'react-redux';
import Header from '../components/ui/Navigation/Header';
import {
    toogleMenuMobile
} from '../actions/menu';

const stateToProps = state => ({
    enableAccountsMenu: state.menu.toggleAccounts,
});

const dispatchToProps = dispatch => ({
    toggleMobileMenu: () => dispatch(toogleMenuMobile())
});

export default connect(stateToProps, dispatchToProps)(Header);
