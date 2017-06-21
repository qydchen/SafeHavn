import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import SessionFormContainer from './session_form_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first: '',
      last: '',
      password: '',
      month: null,
      day: null,
      year: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
      const user = Object.assign({}, this.state);
 		if (this.props.formType === 'login'){
 			this.props.login({user}).then(this.props.closeModal);
 		} else if (this.props.formType === 'signup'){
 			this.props.signup({user}).then(this.props.closeModal);
 		}
     this.setState({email: '', password: '', first: '', last: '', month: null, day: null, year: null });
  }

  renderErrors() {
    return(
      <ul className="ModalErrors">
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
        {error}
        </li>
      ))}
      </ul>
    );
  }

  LastInput() {
    if (this.props.formType === 'signup') {
      return (
        <div className="reg-box" >
          <input placeholder="First name" className="FirstInput" onChange={this.update("first")} value={this.state.first}/>
        </div>
      )
    }
  }
  FirstInput() {
    if (this.props.formType === 'signup') {
      return (
        <div className="reg-box" >
          <input placeholder="Last name" className="LastInput" onChange={this.update("last")} value={this.state.last}/>
        </div>
      )
    }
  }

  footer() {
    if (this.props.formType === 'signup') {
      return (
        <div className="va-container va-container-h">
          <span className="switch-to">
            <div className="account-txt">Already have a SafeHavn account? </div>
          </span>
          <span className="switch" onClick={() => this.props.openModal(<SessionFormContainer formType="login"/>)}>
            <div className="reg-txt"> Log In </div>
          </span>
        </div>
      )
    } else {
      return (
        <div className="va-container va-container-h">
          <span className="switch-to">
            <div className="account-txt">Don't have a SafeHavn account? </div>
          </span>
          <span className="switch" onClick={() => this.props.openModal(<SessionFormContainer formType="signup"/>)}>
            <div className="reg-txt"> Sign Up </div>
          </span>
        </div>
      )
    }
  }

  birthday() {
    if (this.props.formType === 'signup') {
      return (
        <div>
          <h3 className="bday">Birthday</h3>
          <br/>
          <p>To sign up, you must be 18 years or older. Other people won't see your birthday.</p>
          <p> MONTHDAYYEAR </p>
          <p> I'd like to receive information about SafeHavn and David Chen. </p>
          <p> By click Sign up or Continue with, I agree to consider David Chen for potential emplolyment opportunities.</p>
        </div>
      )
    }
  }

  render() {
    const buttonText = (this.props.formType === 'signup') ? 'Sign up' : 'Log in';
    return (
      <div>
        <button className="x-close" onClick={() => this.props.closeModal()}>X</button>

        <form className="SubmitForm" onSubmit={this.handleSubmit}>
          <div className="reg-box" >
            <input placeholder="Email address" className="EmailInput" onChange={this.update("email")} value={this.state.email}/>
          </div>
          {this.LastInput()}
          {this.FirstInput()}
          <div className="reg-box" >
            <input placeholder="Create a Password" className="PasswordInput" onChange={this.update("password")} type="password"/>
          </div>
          <button className="SubmitButton">
            <span className="btn-text">
              {buttonText}
            </span>
          </button>
        </form>
        <hr className="signup-divider"/>
          {this.footer()}
          {this.renderErrors()}
      </div>
    )
  }
}

export default withRouter(SessionForm);
