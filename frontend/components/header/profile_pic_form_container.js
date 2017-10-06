import { connect } from 'react-redux';
import ProfilePicForm from './profile_pic_form';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors, editProfile } from '../../actions/session_actions'

const mapStateToProps = ({session}) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    editProfile: (formData, userid) => dispatch(editProfile(formData, userid)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePicForm);
