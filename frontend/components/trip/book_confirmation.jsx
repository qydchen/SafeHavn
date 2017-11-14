import React from 'react';
import { withRouter } from 'react-router-dom';

class BookConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num_guests: this.props.confirmations.num_guests,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn && this.props.confirmations) {
      this.props.fetchHome(this.props.homeid);
      this.props.fetchConfirmation(this.props.confirmations.id);
    } else {
      return (<div className="loading">You are not logged in</div>)
    }
  };

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      this.props.history.push(`/homes`);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { start_date, end_date, total_cost } = this.props.confirmations;
    const { num_guests } = this.state;
    const { homeid } = this.props;
    const trip = {
      home_id,
      total_cost,
      start_date: startDate.toDate(),
      end_date: endDate.toDate(),
      num_guests: parseInt(num_guests),
    }

		this.props.createTrip({trip})
      .then(this.props.history.push(`/user/${this.props.currentUser.id}/trips`));
    this.props.deleteConfirmation();
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
    const { inputs, listing } = this.props;
    const { confirmation } = this.props.inputs;
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
            <div className="bk-checkin">{confirmation.utcBeg}</div>
          </div>
          <div className="cal-col">
            <div className="check-col">Checkout</div>
            <div className="bk-checkin">{confirmation.utcEnd}</div>
          </div>
        </div>
        <div className="book-div"/>
        <div className="panel-body">
          <div className="bk-price-row">
            <div className="price-calc">${listing.price} x {confirmation.days} nights</div>
            <div className="tot-price">${confirmation.cost}</div>
          </div>
          <div className="bk-price-row">
            <div className="price-calc">Cleaning fee</div>
            <div className="tot-price">${confirmation.cleaning}</div>
          </div>
          <div className="bk-price-row">
            <div className="price-calc">Service fee</div>
            <div className="tot-price">${confirmation.service}</div>
          </div>

        </div>
        <div className="book-div"/>
        <div className="panel-body">
          <div className="total-txt">Total</div>
          <div className="total-txt">${confirmation.totalCost}</div>
        </div>
      </section>
    )
  }

  render() {
    if (this.props.listing === undefined) {
      return (
        <div className="loading">Fetching listing</div>
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
