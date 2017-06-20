import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import { Route, Redirect } from 'react-router-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Header extends React.Component {
  constructor(props){
   super(props);
   this.state = { isOpen: false};
   this.handleClick = this.handleClick.bind(this);
   this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
   this.handleModal = this.handleModal.bind(this);
 }

  handleClick(e){
    e.preventDefault();
    this.props.logout();
  }

  closeModal(e) {
    this.setState({ isOpen: false, redirect: true });
  }

  openModal(){
    this.setState({ isOpen: true });
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  handleModal(e){
    if (e.currentTarget.textContent === 'Sign up' ||
      e.currentTarget.textContent === 'Create account'){
      this.props.signupForm();
    } else if (e.currentTarget.textContent === 'Log in'){
      this.props.loginForm();
    }
    this.openModal();
  }

  render(){
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome, {this.props.currentUser.username}</h1>
          <button onClick={this.handleClick}>Log Out!</button>
        </div>
      );
    } else {
      return (

        <div className="AuthButtons">
          <Modal
            onRequestClose={this.closeModal}
            isOpen={this.state.isOpen}
            style={customStyles}
            contentLabel="Modal">
            <SessionFormContainer loggedIn={this.props.loggedIn} />
          </Modal>
          <button className='signin'onClick={this.handleModal}>Log in</button>
          <button className='signup'onClick={this.handleModal}>Create account</button>
        </div>

      )
    }
  }
};

export default Header;





// <button className='signup-main'
//   onClick={this.handleModal}>
//     Sign up for free
// </button>
