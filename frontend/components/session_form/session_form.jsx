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
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

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

  navLink() {
    if (this.props.formType === '/login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    const buttonText = this.props.formType === '/login' ? 'Log In' : 'Sign Up';

    let redirectButton;
    if (buttonText === 'Log In') {
      redirectButton = <Link to="/signup">Sign Up</Link>;
    } else {
      redirectButton = <Link to="/login">Log In</Link>;
    }

    if (this.props.loggedIn) {
      return (
        <Redirect to='/' />
      );
    } else {
      return (
        <section className="session-wrapper">
          <form onSubmit={this.handleSubmit}>

            <label>Username:
              <input onChange={this.update("username")} value={this.state.username}/>
            </label>

            <label>Password:
              <input onChange={this.update("password")} type="password"/>
            </label>

            <label>Email:
              <input onChange={this.update("email")} value={this.state.email}/>
            </label>

            <button>{buttonText}</button>
          </form>

          {redirectButton}
        </section>
      );
    }
  }
}

export default withRouter(SessionForm);
