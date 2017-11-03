import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Link, withRouter } from 'react-router-dom';
import Modal from "react-modal";
import SessionFormContainer from "../session_form/session_form_container";
import { DateRangePicker } from 'react-dates';

class BookIt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      num_guests: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.navigateToBookTrip = this.navigateToBookTrip.bind(this);
    this.clearErrorsAndOpenModal = this.clearErrorsAndOpenModal.bind(this);
  };

  clearErrorsAndOpenModal(component){
    this.props.clearErrors();
    this.props.openModal(component);
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  navigateToBookTrip() {
    if (this.state.startDate && this.state.endDate) {
      const url = `/homes/${this.props.match.params.homeid}/book`;
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
    const input = Object.assign({}, this.state);
		if (this.props.currentUser) {
      this.props.receiveInput(input);
      this.navigateToBookTrip();
    } else {
      this.clearErrorsAndOpenModal(<SessionFormContainer formType="signup"/>)
    }
  };

  pricePerNight(){
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
                <select className='select-dropdown guests' value={this.state.num_guests}
                    onChange={this.handleSelectChange('num_guests')}>{options}
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