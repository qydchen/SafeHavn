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

 		if (this.props.modal === 'login'){
 			this.props.login({user});
 		} else if (this.props.modal === 'signup'){
 			this.props.signup({user});
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
    if (this.props.modal === 'signup') {
      return (
        <label>Email:
          <input className="EmailInput" onChange={this.update("email")} value={this.state.email}/>
        </label>
      )
    }
  }

  signupScreen() {
    const buttonText = (this.props.modal === 'signup') ? 'Sign Up' : 'Log In';
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

  render() {
    return (
      <section className="session-wrapper">
        {this.signupScreen()}
      </section>
    );
  }

}

export default withRouter(SessionForm);
