import React from 'react';

class Reviews extends React.Component{

  displayReviews() {
    return this.props.reviews.map((review, idx) => {
      return (
        <div key={idx} className="review-container">
          <div className="review-header">
            <div className="review-author">
              {review.author}
            </div>
            <div className="review-timestamp">
              {review.created_at}
            </div>
          </div>
          <div className="review-body">
            {review.body}
          </div>
        </div>
      )
    })
  };

  render() {
    return (
      <div className="review-container">
        {this.displayReviews()}
      </div>
    )
  }
}

export default Reviews
