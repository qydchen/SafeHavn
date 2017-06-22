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
      month: '',
      day: '',
      year: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrorsAndOpenModal = this.clearErrorsAndOpenModal.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  clearErrorsAndOpenModal(component){
    this.props.clearErrors();
    this.props.openModal(component);
  }

  handleSubmit(e) {
    e.preventDefault();
      const user = Object.assign({}, this.state);
 		if (this.props.formType === 'login'){
 			this.props.login({user}).then(this.props.closeModal);
 		} else if (this.props.formType === 'signup'){
 			this.props.signup({user}).then(this.props.closeModal);
 		}
     this.setState({email: '', password: '', first: '', last: '', month: '', day: '', year: '' });
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
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

  FirstInput() {
    if (this.props.formType === 'signup') {
      return (
        <div className="reg-box" >
          <input placeholder="First name" className="FirstInput" onChange={this.update("first")} value={this.state.first}/>
          <div className="post-fix">
            <svg className="ftico"/>
          </div>
        </div>
      )
    }
  }
  LastInput() {
    if (this.props.formType === 'signup') {
      return (
        <div className="reg-box" >
          <input placeholder="Last name" className="LastInput" onChange={this.update("last")} value={this.state.last}/>
          <div className="post-fix">
            <svg className="ltico"/>
          </div>
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
          <span className="switch" onClick={() => this.clearErrorsAndOpenModal(<SessionFormContainer formType="login"/>)}>
            <div className="register-txt"> Log In </div>

          </span>
        </div>
      )
    } else {
      return (
        <div className="va-container va-container-h">
          <span className="switch-to">
            <div className="account-txt">Don't have a SafeHavn account? </div>
          </span>
          <span className="switch" onClick={() => this.clearErrorsAndOpenModal(<SessionFormContainer formType="signup"/>)}>
            <div className="register-txt"> Sign Up </div>
          </span>
        </div>
      )
    }
  }

  birthday() {
    if (this.props.formType === 'signup') {
      return (
        <div className="birthdayContainer">
          <div className="birthdayTitle">Birthday</div>
          <div className="birthdayText">To sign up, you must be 18 years or older. Other people won't see your birthday.</div>

            <div className="birthdayRow">

                  { this.selectMonth() }

                  { this.selectDay() }

                  { this.selectYear() }

            </div>

        </div>
      )
    }
  }


  selectMonth() {
    const options = [
      <option value="" key={0}>Month</option>
    ];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];

    for (let i = 1; i <= 12; i++) {
      const month = months[i - 1];

      options.push(
        <option value={i}
          key={i}
        >{months[i - 1]}</option>
      );
    }

    return (
      <div className="bday-column">
        <div className='select-container'>
          <label className="label-hidden"/>
          <div className='select-dd-container'>
            <select className='select-dropdown' value={this.state.month}
              onChange={this.handleSelectChange('month')}
            >{options}
            </select>
            <span className="dropdown-arrow"></span>
          </div>
        </div>
      </div>
    );
  }

  selectDay() {
    const options = [
      <option value="" key={0}>Day</option>
    ];

    for (let i = 1; i <= 31; i++) {
      options.push(
        <option value={i}
          key={i}
        >{i}</option>
      );
    }

    return (
      <div className="bday-column">
        <div className='select-container'>
          <label className="label-hidden"/>
          <div className='select-dd-container'>
            <select className='select-dropdown' value={this.state.day}
              onChange={this.handleSelectChange('day')}
            >{options}</select>
            <span className="dropdown-arrow"></span>
          </div>
        </div>
      </div>
    );
  }

  selectYear() {
    const options = [
      <option value="" key={-1}>Year</option>
    ];

    this.props.years.forEach((year, idx) => (
      options.push(
        <option value={year}
          key={idx}
        >{year}</option>
      )
    ));

    return (
      <div className="bday-column">
        <div className='select-container'>
          <label className="label-hidden"/>
          <div className='select-dd-container'>
            <select className='select-dropdown' value={this.state.year}
              onChange={this.handleSelectChange('year')}
            >{options}</select>
            <span className="dropdown-arrow"></span>
          </div>
        </div>
      </div>
    );
  }

  subscribe() {
    if (this.props.formType === 'signup') {
      return (
        <div className="subscribeContainer">
        <label className="subscribe-lab">
          <div className="subscribe-img">
            <input type="checkbox" className="subbox-input"/>
          </div>
          <div className="subscribe-info"> I'd like to receive information about SafeHavn and David Chen. </div>
        </label>
          <div className="disclaimer"> By clicking on Sign up, I agree to consider David Chen for potential employment opportunities.</div>
        </div>
      )

    }
  }

  render() {
    const buttonText = (this.props.formType === 'signup') ? 'Sign up' : 'Log in';
    return (
      <div>
        <button className="x-close" onClick={() => this.props.closeModal()}></button>

        <form className="SubmitForm" onSubmit={this.handleSubmit}>
          <div className="reg-box" >
            <input placeholder="Email address" className="EmailInput" onChange={this.update("email")} value={this.state.email}/>
            <div className="post-fix" >
              <svg className="emico"/>
            </div>
          </div>
          {this.FirstInput()}
          {this.LastInput()}
          <div className="reg-box" >
            <input placeholder="Create a Password" className="PasswordInput" onChange={this.update("password")} type="password"/>
            <div className="post-fix">
              <svg className="pwico"/>
            </div>
          </div>

          {this.birthday()}
          {this.subscribe()}

          <button className="SubmitButton">
            <span className="btn-text">
              {buttonText}
            </span>
          </button>
        </form>
        <hr className="signup-divider"/>
          {this.footer()}
          <br />
          <div className="va-container va-container-h">
            <span className="switch-to">
              <div className="account-txt">Try out as Guest? </div>
            </span>
            <span className="switch" onClick={() => this.props.guestLogin().then(this.props.closeModal)}>
              <div className="register-txt"> Guest Login </div>
            </span>
          </div>
          {this.renderErrors()}
      </div>
    )
  }
}

export default withRouter(SessionForm);
