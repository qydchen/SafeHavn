import React from 'react';
import SessionFormContainer from "../session_form/session_form_container";

class Reviews extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      rating: 10,
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      home_id: this.props.homeid,
      rating: this.state.rating,
      body: this.state.body
    }
    
    if (this.props.currentUser) {
      this.props.createReview(review).then(this.props.closeModal());
    }
  }

  reviewForm() {
    return (
      <section className="book-trip-page">
        <form className="book-trip-form">Write a review
          {this.selectRating()}
          <div className="say-hello-container">Tell everyone about your stay:
            <textarea className="say-hello" placeholder="Write your review here"
            value={this.state.body} onChange={this.handleSelectChange('body')}
            />
          </div>
          <button className="pinkButton bk-tp-btn" onClick={(e) => this.handleSubmit(e)}>
            <span className="btn-text">
              Post Review
            </span>
          </button>
        </form>
      </section>
    )
  }

  selectRating() {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(
        <option value={i}
        key={i}
        >{i}</option>
      )
    };
    return (
      <div className="book-column">
        <div className='select-container book-txt'>
          <label className="book-label"/>Pick a rating
          <div className='select-dd-container book-dd'>
            <select className='select-dropdown select-bk-dd' value={this.state.rating}
              onChange={this.handleSelectChange('rating')}
            >{options}</select>
            <span className="dropdown-arrow"></span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="review-form">
        {this.reviewForm()}
      </div>
    )
  }
}

export default Reviews
