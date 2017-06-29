import React from 'react';
import { withRouter } from 'react-router-dom';

class BookTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num_guests: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({num_guests: this.props.inputs.guests});
      this.props.fetchHome(this.props.homeid);
    } else {
      return (
        <div className="loading">You are not logged in</div>
      )
    }
  };

  componentDidUpdate() {
    if (this.props.currentUser === null) {
      this.props.history.push(`/homes`);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const trip = {
      home_id: this.props.homeid,
      start_date: this.props.inputs.startDate.toDate(),
      end_date: this.props.inputs.endDate.toDate(),
      num_guests: parseInt(this.state.num_guests)
    }
		this.props.createTrip({trip}).then(this.props.history.push(`/homes`));
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
    const {inputs, listing} = this.props;
    const end = inputs.endDate; //calculates the difference between days
    const beg = inputs.startDate;
    const days = (end.diff(beg,"days"));
    const cost = listing.price * days;
    const utcBeg = beg.format('MMM D, YYYY') // makes days read like english
    const utcEnd = end.format('MMM D, YYYY')
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
            <div className="bk-checkin">{utcBeg}</div>
          </div>
          <div className="cal-col">
            <div className="check-col">Checkout</div>
            <div className="bk-checkin">{utcEnd}</div>
          </div>
        </div>
        <div className="book-div"/>
        <div className="panel-body">
          <div className="bk-price-row">
            <div className="price-calc">${listing.price} x {days} nights</div>
            <div className="tot-price">${cost}</div>
          </div>
          <div className="bk-price-row">
            <div className="price-calc">Cleaning fee</div>
            <div className="tot-price">$20</div>
          </div>
          <div className="bk-price-row">
            <div className="price-calc">Service fee</div>
            <div className="tot-price">$35</div>
          </div>

        </div>
        <div className="book-div"/>
        <div className="panel-body">
          <div className="total-txt">Total</div>
          <div className="total-txt">${cost + 20 + 35}</div>
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

export default withRouter(BookTrip);
