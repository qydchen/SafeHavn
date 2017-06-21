import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: !!session.currentUser,
    errors: session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    logout: (user) => dispatch(logout(user)),
    clear: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
