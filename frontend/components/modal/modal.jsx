import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <div className="modal-screen" onClick={() => this.props.closeModal()}></div>
          <div className="modal-content">
            {this.props.component}
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal-not-active"></div>
      );
    }
  }
}

export default Modal;
