import { connect } from 'react-redux';
import SessionForm from './session_form';

import { closeModal, openModal } from '../../actions/modal_actions';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';

import { yearsRange } from '../../reducers/selectors';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: !!session.currentUser,
    errors: session.errors,
    years: yearsRange(),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    logout: (user) => dispatch(logout(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    openModal: (component) => dispatch(openModal(component)),
    guestLogin: () => dispatch(
      login({"user": {"email": "guest@live.com", "first": "", "last": "", "password": "asdf1234", "month": "", "day": "", "year": ""}})
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
