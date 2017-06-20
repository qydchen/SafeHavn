import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session, modal, loggedIn }) => {
  return {
    errors: session.errors,
    type: modal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (u) => dispatch(login(u)),
    signup: (u) => dispatch(signup(u)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
