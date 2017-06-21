import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
      debugger
 		if (this.props.formType === 'login'){
 			this.props.login({user}).then(this.props.closeModal);
 		} else if (this.props.formType === 'signup'){
 			this.props.signup({user}).then(this.props.closeModal);
 		}
     this.setState({username: '', password: '', email: '' });
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

  emailInput() {
    if (this.props.formType === 'signup') {
      return (
        <label>Email:
          <input className="EmailInput" onChange={this.update("email")} value={this.state.email}/>
        </label>
      )
    }
  }

  render() {
    const buttonText = (this.props.formType === 'signup') ? 'Sign Up' : 'Log In';
    return (
      <form className="SubmitForm" onSubmit={this.handleSubmit}>
        <label>Username:
          <input className="UsernameInput" onChange={this.update("username")} value={this.state.username}/>
        </label>
        <br/>
        <label>Password:
          <input className="PasswordInput" onChange={this.update("password")} type="password"/>
        </label>
        <br/>
        {this.emailInput()}
        <br/>
        <button className="SubmitButton">{buttonText}</button>
        <br/>
        {this.renderErrors()}
      </form>
    )
  }
}

export default withRouter(SessionForm);
