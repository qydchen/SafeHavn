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
  const loggedIn = ownProps.loggedIn
  const getProcessForm = (loggedIn) ? login : signup;
  return {
    processForm: user => {
      return dispatch(getProcessForm(user));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
