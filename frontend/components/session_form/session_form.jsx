import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isInLogInScreen = this.isInLogInScreen.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  isInLogInScreen() {
    return this.props.formType === '/login';
  }

  emailInput() {
    if (!this.isInLogInScreen()) {
      return (
        <label>Email:
          <input onChange={this.update("email")} value={this.state.email}/>
        </label>
      )
    }
  }

  signupScreen() {
    const buttonText = this.isInLogInScreen() ? 'Log In' : 'Sign Up';
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input onChange={this.update("username")} value={this.state.username}/>
          </label>
          <label>Password:
            <input onChange={this.update("password")} type="password"/>
          </label>
          {this.emailInput()}
          <button>{buttonText}</button>
        </form>
      )
  }

  render() {
    let redirectButton;
    if (this.isInLogInScreen()) {
      redirectButton =
        <div>Do you have an account?
          <Link to="/signup">Sign Up</Link>
        </div>;
    } else {
      redirectButton =
        <div>You have an account,
          <Link to="/login">Log In</Link>
          instead.
        </div>;
    }

    if (this.props.loggedIn) {
      return (
        <Redirect to='/' />
      );
    } else {
      return (
        <section className="session-wrapper">
          {this.renderErrors()}
          {this.signupScreen()}
          {redirectButton}
        </section>
      );
    }
  }
}

export default withRouter(SessionForm);
