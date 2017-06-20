import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';
import { signupForm, loginForm } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    signupForm: () => dispatch(signupForm()),
    loginForm: () => dispatch(loginForm())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
