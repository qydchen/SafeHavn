import React from 'react';
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

class Reviews extends React.Component{

  displayReviews() {
    return this.props.reviews.map((review, idx) => {
      const year = review.created_at.slice(0,4);
      const month = months[parseInt(review.created_at.slice(5,7)) - 1];
      return (
        <div key={idx} className="review-container">
          <div className="review-top">
            <div className="review-header">
              <img className="profile-pic" src={review.image_url}/>
              <div>
                <div className="review-author">
                  {review.author}
                </div>
                <div className="review-timestamp">
                  {month} {year}
                </div>
              </div>
            </div>
            <div className='review-rating'>Rating: <span className="strong">{review.rating}/10</span></div>
          </div>

          <div className="review-body">
            {review.body}
          </div>

          <hr className="rowDivider"/>
        </div>
      )
    })
  };

  render() {
    return (
      <div className="all-review-container">
        {this.displayReviews()}
      </div>
    )
  }
}

export default Reviews
