import React from 'react';

class BookIt extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkin: "", /// just for now.... bookings not done yet
      checkout: "",
      guests: ""
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  pricePerNight(){
    return (
      <div className="offers-box">
        <div className="thunderbolt"/>
        <div className="book-it-price">${this.props.listing.price}</div>
        <div className="per-night">per night</div>
      </div>
    )
  }

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
        <div className="row-condensed">
          <div>

            <div className="checking-col">
              <label className="guest-check">Check In</label>

              <input className="check-in date-select" placeholder="mm/dd/yyyy"/>
            </div>

            <div className="checking-col">
              <label className="guest-check">Check Out</label>

              <input className="check-out date-select" placeholder="mm/dd/yyyy"/>
            </div>

          </div>
        <div className="guest-dd-container">
            <div className='select-container'>
              <label className="guest-check">Guests</label>
                <div className='select-dd-container'>
                  <select className='select-dropdown guests' value={this.state.guests}
                      onChange={this.handleSelectChange('guests')}>{options}
                  </select>
                    <span className="dropdown-arrow"></span>
                  </div>
                </div>

          </div>

          <button className="pinkButton">
            <span className="btn-text">
              Book
            </span>
          </button>

          <div className='margin-top-8px'>
            <span className="disclaimer">You won't be charged yet</span>
          </div>
        </div>

      </div>
    )
  }

  render() {
    return (
      <div className="book-it">
        <div className="bookItContainer">
          {this.pricePerNight()}
          {this.bookingForm()}
        </div>


      </div>
    )
  }

}

export default BookIt;
