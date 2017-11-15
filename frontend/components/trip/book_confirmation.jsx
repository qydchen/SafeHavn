import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';

class BookConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num_guests: 1,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    const { loggedIn, fetchConfirmation, fetchHome, homeid } = this.props;
    if (loggedIn) {
      fetchConfirmation().then( res => {
        if (!isEmpty(res.confirmation)) {
          fetchHome(homeid);
          this.setState({num_guests: res.confirmation.num_guests});
        }
      })
    }
  };

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      this.props.history.push(`/homes`);
    }
  }

  componentWillUnmount() {
    this.props.deleteConfirmation();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { num_guests } = this.state;
    const { homeid, confirmations } = this.props;
    const trip = merge({home_id: homeid, num_guests: parseInt(num_guests)}, confirmations);

		this.props.createTrip({trip})
      .then(this.props.history.push(`/user/${this.props.currentUser.id}/trips`));
  };

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  selectGuests() {
    const options = [
      <option value="1" key={1}>1 guest</option>
    ];
    for (let i = 2; i <= this.props.listing.space.max_guests; i++) {
      options.push(
        <option value={i}
        key={i}
        >{i} guests</option>
      )
    };
    return (
      <div className="book-column">
        <div className='select-container book-txt'>
          <label className="book-label"/>Who's coming?
          <div className='select-dd-container book-dd'>
            <select className='select-dropdown select-bk-dd' value={this.state.num_guests}
              onChange={this.handleSelectChange('num_guests')}
            >{options}</select>
            <span className="dropdown-arrow"></span>
          </div>
        </div>
      </div>
    );
  }

  bookingRightPanel() {
    const { confirmations, listing } = this.props;
    return (
      <section className="bk-right-panel">
        <div className="bk-pic-container">
          <img className="bk-pic" src={listing.image_url}/>
        </div>
        <div className="panel-body">
          <div className="bk-host">Hosted by {listing.host.first}</div>
          <div className="bk-title">{listing.title}</div>
          <div className="bk-desc">{listing.space.room_type}</div>
          <div className="bk-desc">{listing.address}</div>
        </div>
        <div className="book-div"/>
        <div className="panel-body check-col calendar-position">
          <div className="cal-col">
            <div className="check-col">Check-in</div>
            <div className="bk-checkin">{confirmations.start_date}</div>
          </div>
          <div className="cal-col">
            <div className="check-col">Checkout</div>
            <div className="bk-checkin">{confirmations.end_date}</div>
          </div>
        </div>
        <div className="book-div"/>
        <div className="panel-body">
          <div className="bk-price-row">
            <div className="price-calc">${listing.price} x {confirmations.days} nights</div>
            <div className="tot-price">${confirmations.nightly_cost}</div>
          </div>
          <div className="bk-price-row">
            <div className="price-calc">Cleaning fee</div>
            <div className="tot-price">${confirmations.cleaning_cost}</div>
          </div>
          <div className="bk-price-row">
            <div className="price-calc">Service fee</div>
            <div className="tot-price">${confirmations.service_cost}</div>
          </div>

        </div>
        <div className="book-div"/>
        <div className="panel-body">
          <div className="total-txt">Total</div>
          <div className="total-txt">${confirmations.total_cost}</div>
        </div>
      </section>
    )
  }

  render() {
    if (this.props.listing === undefined) {
      return (
        <div className="loading">Page Expired</div>
      );
    } else {
      return (
        <section className="book-trip-page">
          <form className="book-trip-form">About Your Trip
          {this.selectGuests()}
            <label className="subscribe-lab">
              <div className="subscribe-img">
                <input type="checkbox" className="subbox-input subscribe-info "/>
              </div>
              <div className="subscribe-info pet-info">Bringing a pet?</div>
            </label>
            <div className="say-hello-container">Say hello to your host and tell them why you're coming:
              <textarea className="say-hello" placeholder="Visiting family or friends? See the sights? This helps your host plan for your trip."/>
            </div>
            <button className="pinkButton bk-tp-btn" onClick={(e) => this.handleSubmit(e)}>
              <span className="btn-text">
                Book
              </span>
            </button>
          </form>
          {this.bookingRightPanel()}
        </section>
      )
    }
  }
}

export default withRouter(BookConfirmation);
