import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import HomeShowContainer from './home_show_container';
import { asArray } from '../../reducers/selectors.js';

// shows a single listing
const cancellationText = {
  Strict: "Cancel up to 7 days before your trip and get a 50% refund plus service fees back.",
  Moderate: "Cancel up to 5 days before your trip and get a full refund, including service fees.",
  Flexible: "Cancel up to 24 hours before your trip and get a full refund, including service fees."
}

class HomeShow extends React.Component {
  constructor(props) {
    super(props)
    // this.cancelText = cancellationText[this.props.listing.cancellation];
  }

  componentWillMount(){
    this.props.fetchHome(this.props.homeid);
  }

  componentDidUpdate(){
    if(!this.props.listing.id) {
      this.props.fetchhome(this.props.homeid);
    }
  }

  render() {
    const { home, homeid, fetchHome } = this.props;

    return (
      if (home.title === undefined) {
        return (
          <div className="loading">Fetching home</div>
        );
      } else {
        
      }

    )
  }
}

// <div className="single-listing-photo">
//   <div className="single-listing-image"/>
//   <div className="single-listing-viewimage">
//     <button type="button" className="btn"></button>
//   </div>
// </div>

export default HomeShow;
