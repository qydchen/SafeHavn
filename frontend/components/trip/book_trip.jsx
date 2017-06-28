import React from 'react';
import { withRouter } from 'react-router-dom';

class BookTrip extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   guests: ""
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = Object.assign({}, this.state, this.props.inputs);
		this.props.receiveInput(input); // after this, move to next screen
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  // selectGuests() {
  //   const options = [
  //     <option value={this.props.guests} key={0}>{this.props.guests} guests</option>
  //   ];
  //   for (let i = 1; i <= this.props.listing.max_guests; i++) {
  //     if (i === 1) {
  //       options.push(
  //         <option value={i}
  //           key={i}
  //         >{i} guest</option>
  //       );
  //     } else {
  //       options.push(
  //         <option value={i}
  //         key={i}
  //         >{i} guests</option>
  //       );
  //     }
  //   }
  //
  //   return (
  //     <div className="book-column">
  //       <div className='select-container'>
  //         <label className="book-label"/>Who's coming?
  //         <div className='select-dd-container'>
  //           <select className='select-dropdown' value={this.state.guests}
  //             onChange={this.handleSelectChange('guests')}
  //           >{options}</select>
  //           <span className="dropdown-arrow"></span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  bookingRightPanel() {
    return (
      <section className="bk-right-panel">

        <div className="bk-pic"> </div>
        <div className="bk-host"> </div>
        <div className="bk-title"> </div>
        <div className="bk-checkin"> </div>

        <div className="bk-price-row">
          <div className="price-calc">{this.props.listing.price} x BLAH nights</div>
          <div className="post-fix">
            <svg className="emico"/>>
          </div>
          <div className="tot-price">${this.cost()}</div>
        </div>

        <div className="bk-price-row">
          <div className="price-calc">Service fee</div>
          <div className="post-fix">
            <svg className="emico"/>
          </div>
          <div className="tot-price">$20</div>
        </div>

        <div className="total-row">
          <div className="total-txt">Total</div>
          <div className="total-txt">$ADDTTOTAL</div>
        </div>

      </section>
    )

  }
  // {this.selectGuests()}

  render () {
    return (
      <section className="book-trip-page">
        <form className="book-trip-form" onSubmit={this.handleSubmit}>

          <label className="subscribe-lab">
            <div className="subscribe-img">
              <input type="checkbox" className="subbox-input"/>
            </div>
            <div className="subscribe-info">Bringing a pet?</div>
          </label>

          <div className="say-hello-container">Say hello to your host and tell them why you're coming:
            <textbox className="say-hello" placeholder="Visiting family or friends? See the sights? This helps your host plan for your trip."/>
          </div>
          <button className="pinkButton">
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

export default withRouter(BookTrip);
