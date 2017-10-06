import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal, receiveComponent } from '../../actions/modal_actions';

const mapStateToProps = ({modal}) => {
  return {
    isOpen: modal.isOpen,
    component: modal.component
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
