import React from 'react';
import ReactTooltip from 'react-tooltip';
import { withRouter } from 'react-router-dom';
import SessionFormContainer from "../session_form/session_form_container"; // used to redirect user to log in
import { DateRangePicker } from 'react-dates';

// Refers to the the booking box in home show

class BookIt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      numGuests: 1,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.navigateToBookConfirmation = this.navigateToBookConfirmation.bind(this);
    this.clearErrorsAndOpenModal = this.clearErrorsAndOpenModal.bind(this);
  };

  clearErrorsAndOpenModal(component){
    this.props.clearErrors();
    this.props.openModal(component);
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  navigateToBookConfirmation() {
    if (this.state.startDate && this.state.endDate) {
      const { home_id } = this.props
      const { startDate, endDate, numGuests } = this.state;
      const url = `/homes/${home_id}/book`;
      const days = endDate.diff(startDate,"days");
      const nightly_cost = this.props.listing.price * days;
      const cleaning_cost = 20;
      const service_cost = 35;
      const total_cost = cost + cleaning + service;
      const start_date = startDate.format('MMM D, YYYY'); // makes days read like english
      const end_date = endDate.format('MMM D, YYYY');
      const num_guests = numGuests;
      const confirmation = {
        home_id,
        days,
        nightly_cost,
        cleaning_cost,
        service_cost,
        total_cost,
        start_date,
        end_date,
        num_guests
      }
      this.props.createConfirmation(confirmation);
      this.props.history.push(url);
    } else {
      this.props.openModal(
      <div className="prompt-box">
        <div className="no-date-prompt">Which days are you interested in booking?</div>
      </div>
    )}
  };

  handleSubmit(e) {
    e.preventDefault();
    const { loggedIn, receiveInput } = this.props;
    // const input = Object.assign({}, this.state);
		if (loggedIn) {
      // receiveInput(input);
      this.navigateToBookConfirmation();
    } else {
      this.clearErrorsAndOpenModal(<SessionFormContainer formType="signup"/>)
    }
  };

  pricePerNight() {
    return (
      <div className="offers-box">
        <div data-tip data-for="thunder-tt" className="thunderbolt"/>
        <div className="book-it-price">${this.props.listing.price}</div>
        <div className="per-night">per night</div>
      </div>
    )
  };

  bookingForm() {
    const options = [
      <option value="1" key={1}>1 guest</option>
    ];
    for (let i = 2; i <= this.props.listing.space.max_guests; i++) {
      options.push(
        <option value={i} key={i}>{i} guests</option>
      );
    }

    return (
      <div>
        <form className="row-condensed">
          <div>
            <div className="guest-header">
              <div className="guest-check">Check In</div>
              <div className="guest-check">Check Out</div>
            </div>
            <div className="date-range-calendar" placeholder='mm/dd/yyyy'>
              <DateRangePicker
                startDate={ this.state.startDate }
                endDate={ this.state.endDate }
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={ this.state.focusedInput }
                onFocusChange={ focusedInput => this.setState({ focusedInput }) }
                />
            </div>

          </div>
        <div className="guest-dd-container">
            <div className='select-container'>
              <label className="guest-check">Guests</label>
              <div className='select-dd-container'>
                <select className='select-dropdown guests' value={this.state.numGuests}
                    onChange={this.handleSelectChange('numGuests')}>{options}
                </select>
                <span className="dropdown-arrow"></span>
              </div>
            </div>
        </div>

          <button onClick={this.handleSubmit}
            className="pinkButton book-btn">
            <span className="btn-text">Book</span>
          </button>

          <div className='margin-top-8px'>
            <span className="disclaimer book-disc">You won't be charged yet, but you'll give me a paycheck soon.</span>
          </div>
        </form>

      </div>
    )
  };

  render() {
    return (
      <div className="book-body">
        <div className="book-it">
          <div className="bookItContainer">
            {this.pricePerNight()}
            {this.bookingForm()}
          </div>
        </div>
        <ReactTooltip className="fav-tt" id="thunder-tt" place="top" type="light" effect="solid">
          <span className="tt-txt stronger">Instant Book</span>
          <br />
          <span className="tt-txt">Book without waiting for the host to respond</span>
        </ReactTooltip>
      </div>
    )
  };

}

export default withRouter(BookIt);
