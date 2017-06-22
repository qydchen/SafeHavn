import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import SessionFormContainer from "../session_form/session_form_container";
import { Route, Redirect } from "react-router-dom";

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
          <div className ="header-enter">
            <span> Become a Host </span>
          </div>
          <div className ="header-enter">
            <span> Help </span>
          </div>
          <div className ="header-enter" onClick={() => this.clearErrorsAndOpenModal(
            <SessionFormContainer formType="signup"/>)}>
            <span> Sign Up </span>
          </div>
          <div className ="header-enter" onClick={() => this.clearErrorsAndOpenModal(
            <SessionFormContainer formType="login"/>)}>
            <span> Log In </span>
          </div>
        </div>
      )
    }
  }

  filterHeader() {
    return (
      <div className="filter-header">
        <div className="searchBarWrapper">
          <div className="container">

            <div className="searchContainer">
              <label className="hidden">
                <div className="geoCompleteContainer">
                  <div className="prefixContainer"/>
                  <div className="inputContainer">
                    <input className="anywhereInput">
                    </input>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="anytimeContainer"></div>
          <div className="guestContainer"></div>





        </div>
      </div>

    )
  }


  render(){
    return (
      <div className ="HeaderBar">
        <div className="left">
          <a className="Logo" onClick={() => this.props.history.push("/")} ></a>
        </div>
        {this.filterHeader()}
        {this.logInHeader()}
        {this.loggedInHeader()}
      </div>
    )
  }
};

export default Header;
