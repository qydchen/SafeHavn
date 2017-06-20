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
    this.setState({username: '', password: ''});
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

  emailInput() {
    if (this.props.type === 'signup') {
      return (
        <label>Email:
          <input onChange={this.update("email")} value="Please provide your email"/>
        </label>
      )
    }
  }

  signupScreen() {
    const buttonText = (this.props.type === 'signup') ? 'Sign Up' : 'Log In';
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input onChange={this.update("username")} value={this.state.username}/>
          </label>
          <br/>
          <label>Password:
            <input onChange={this.update("password")} type="password"/>
          </label>
          <br/>
          {this.emailInput()}
          <br/>
          {this.renderErrors()}
          <br/>
          <button>{buttonText}</button>
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
