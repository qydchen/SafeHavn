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

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn === false) {
      this.setState({ isOpen: false});
    }
  }

  handleModal(e){
    switch (e.currentTarget.textContent) {
      case ('Sign Up'):
        this.props.signupForm();
      break;
      case ('Log In'):
        this.props.loginForm();
      break;
    }
    this.openModal();
  }

  loggedInHeader() {
    if (this.props.currentUser) {
      return (
        <div className ="SignOutButton">
          <span onClick={this.handleClick}>Log Out</span>
        </div>
      )
    }
  }

  logInHeader() {
    if (!this.props.currentUser) {
      return (
        <div className="AuthButtons">
          <Modal
            onRequestClose={this.closeModal}
            isOpen={this.state.isOpen}
            style={customStyles}
            contentLabel="Modal">
            <SessionFormContainer loggedIn={this.props.loggedIn}/>
          </Modal>
          <div className ="SignUpButton">
            <span onClick={this.handleModal}>Sign Up</span>
          </div>
          <div className ="LogInButton">
          <span onClick={this.handleModal}>Log In</span>
          </div>
        </div>
      )
    }

  }

  render(){
    return (
      <div className ="HeaderBar">
        <div className="left">
          <a className="Logo" onClick={() => this.props.history.push('/')} ></a>
        </div>
        {this.logInHeader()}
        {this.loggedInHeader()}
      </div>
    )
  }
};
//  <div> className="SearchBar"/></div>
export default Header;
