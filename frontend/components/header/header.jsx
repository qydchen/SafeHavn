import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import SessionFormContainer from "../session_form/session_form_container";
import ProfilePicFormContainer from "./profile_pic_form_container";
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

  tooltip() {
    return (
      <ReactTooltip className="tt-hook" id="auth-tool-tip" place="bottom" type="light" effect="solid">
        <span className="tt-txt">Find an experienced co-host who can help you earn money</span>
        <span className="tt-txt">by renting your extra space to travelers.</span>
      </ReactTooltip>
    )
  }
  // <div className ="header-enter">
  //   <Link to={`/user/${this.props.currentUser.id}/host`} className="trip-link">Host</Link>
  // </div>
  // <div className ="header-enter">
  //   <Link to={`/user/${this.props.currentUser.id}/hostings`} className="trip-link">Your Hostings</Link>
  // </div>

  loggedInHeader() {
    if (this.props.loggedIn) {
      return (
        <div className="auth-buttons">
          <div data-tip data-for="auth-tool-tip" className="header-enter">
            <p className="trip-link">No time to host?</p>
            {this.tooltip()}
          </div>
          <div className ="header-enter">
            <Link to={`/user/${this.props.currentUser.id}/trips`} className="trip-link">Your Trips</Link>
          </div>
          <div className="SignOutButton">
            <span onClick={this.handleClick}>Sign Out</span>
          </div>
          <div className="image-hov" onClick={() => this.clearErrorsAndOpenModal(<ProfilePicFormContainer/>)}>
            <img className="pic-head" src={this.props.currentUser.image_url}/>
          </div>
        </div>
      )
    }
  }

  logInHeader() {
    if (!this.props.loggedIn) {
      return (
        <div className="auth-buttons">
          <div className ="header-enter" onClick={() => this.clearErrorsAndOpenModal(
            <SessionFormContainer formType="login"/>)}>
            <span> Become a Host </span>
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

  verticalNavWrapper() {
    let navWrap;
    let navCol1;
    let navCol2;
    let path = this.props.history.location.pathname;
    if (path.match("/homes/") || path.match("/user/")) {
      navWrap = 'hidden';
    } else {
      navWrap = 'vertical-nav-wrapper';
    };

    if (path.match("/homes")) {
      navCol1 = "nav-cols1";
      navCol2 = "nav-cols2-select";
    } else if (path.match("/")) {
      navCol1 = "nav-cols1-select";
      navCol2 = "nav-cols2";
    };

    return (
      <div className={navWrap}>
        <div className="nav-list">
          <Link to={`/`} className={navCol1}>FOR YOU</Link>
          <Link to={`/homes`} className={navCol2}>HOMES</Link>
        </div>
      </div>
    )
  }

  render(){
    let path = this.props.history.location.pathname;
    const headerClass = (path.match("/homes/") || path.match("/user/")) ? "headerBar-relative show-page-bool" : "headerBar";
    return (
      <div className={headerClass}>
        <div className="left">
          <a className="Logo" onClick={() => this.props.history.push("/")} ></a>
        </div>
        {this.verticalNavWrapper()}
        {this.logInHeader()}
        {this.loggedInHeader()}
      </div>
    )
  }
};


export default Header;
