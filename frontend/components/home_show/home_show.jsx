import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import HomeShowContainer from './home_show_container';
import HomeDetail from './home_detail';
import BookIt from '../trip/book_it';
import Footer from '../footer';
import Reviews from '../review/reviews';

// shows a single listing
class HomeShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchHome(this.props.homeid);
    this.props.fetchReviews(this.props.homeid);
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.match.params.homeid !== nextProps.match.params.homeid) {
    this.props.fetchHome(nextProps.match.params.homeid);
    }
  }

  render() {
    const { listing, reviews, homeid, fetchHome, currentUser, receiveInput, clearErrors, openModal } = this.props;
    if (listing === undefined) {

      return (
        <div className="loading">Fetching listing</div>
      );
    } else {

      return (
        <section className="listing-show-page">

          <div className="single-listing-photocontainer">
            <img className="show-photo" src={this.props.listing.image_url}/>
            <div className="single-listing-viewimage">
              <button type="button" className="view-btn">View Photos</button>
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

                <div className="review-divider">
                  <Reviews
                    reviews={reviews}/>
                </div>
              </div>

              <div className="to-book-it-divider">
                <BookIt
                  listing={listing}
                  currentUser={currentUser}
                  receiveInput={receiveInput}
                  openModal={openModal}
                  clearErrors={clearErrors}/>
              </div>

            </div>
          </div>
          <div className='footer-container'>
            <Footer/>
          </div>
        </section>
      )
    }
  }
}

export default withRouter(HomeShow);
