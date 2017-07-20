import React from 'react';

class Reviews extends React.Component{

  displayReviews() {
    return this.props.reviews.map((review, idx) => {
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
                  {review.created_at.slice(0,7)}
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
