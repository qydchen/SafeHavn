import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session, modal }) => {
  return {
    errors: session.errors,
    modal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
