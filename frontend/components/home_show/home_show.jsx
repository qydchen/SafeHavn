import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import HomeShowContainer from './home_show_container';
import HomeDetail from './home_detail';

// shows a single listing
class HomeShow extends React.Component {
  constructor(props) {
    super(props)
  }


  componentDidMount(){
    this.props.fetchHome(this.props.homeid);
  }

  componentDidUpdate(){
    if(!this.props.listing.id) {
      this.props.fetchHome(this.props.homeid);
    }
  }

  render() {
    const { listing, homeid, fetchHome } = this.props;
    if (listing === undefined) {
      return (
        <div className="loading">Fetching listing</div>
      );
    } else {
      return (
        <section className="listing-show-page">
          <div className="single-listing-photo">
            <div className="single-listing-image"/>
            <div className="single-listing-viewimage">
              <button type="button" className="btn">View Photos</button>
            </div>
          </div>
          <div className="main-detail">
            <div className="container-detail">
              <div className="sub-container-detail">
                <div className="navigation-detail">
                  <div className="navigation-selection">Overview</div>
                  <div className="navigation-selection">Reviews</div>
                  <div className="navigation-selection">The Host</div>
                  <div className="navigation-selection">Location</div>
                </div>
              <HomeDetail listing={listing}/>
              </div>
            </div>
          </div>
        </section>
      )
    }


  }
}

export default HomeShow;
