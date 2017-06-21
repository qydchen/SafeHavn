import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import { Route, Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
   super(props);
   this.handleClick = this.handleClick.bind(this);
   this.clearErrorsAndOpenModal = this.clearErrorsAndOpenModal.bind(this);
 }

  handleClick(e){
    e.preventDefault();
    this.props.logout();
  }


  clearErrorsAndOpenModal(component){
    this.props.clearErrors();
    this.props.openModal(component);
  }

  loggedInHeader() {
    if (this.props.currentUser) {
      return (
        <div className="AuthButtons">
          <div className="SignOutButton">
            <span onClick={this.handleClick}>Sign Out</span>
          </div>
        </div>
      )
    }
  }

  logInHeader() {
    if (!this.props.currentUser) {
      return (
        <div className="AuthButtons">
          <div className ="SignUpButton">
            <span onClick={() => this.clearErrorsAndOpenModal(
              <SessionFormContainer formType="signup"/>)}> Sign Up
            </span>
          </div>
          <div className ="LogInButton">
            <span onClick={() => this.clearErrorsAndOpenModal(
              <SessionFormContainer formType="login"/>)}> Log In
            </span>
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

// <div> className="SearchBar"/>SEARCHBOXPLACEHOLDER</div>
export default Header;
