import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import Footer from '../footer';

class Landing extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchHomes();
  }

  safeHavn(home) {
    return (
      <Link to={`/homes/${home.id}`} className="link-to">
        <div className="home-card">

          <div className="show-card-container">
            <img className="show-card" src={home.image_url}/>
          </div>

          <div className="card-top-row">
            <div className="card-bold">${home.price} {home.title}</div>
          </div>

          <div className="card-bot-row">
            <div className="card-norm">{home.space.room_type} · {home.space.beds} beds</div>
          </div>

          <div className="card-review">
            <div className="card-review-stars">* * * * *</div>
            <div className="reviews">DO THIS LATER reviews</div>
          </div>

        </div>
      </Link>
    )
  }

  render() {
    const { homes } = this.props;
    const homesIndex = homes.map((home, idx) => {
      return (
        <div className="landing-card-container" key={idx}>
          {this.safeHavn(home)}
        </div>
      )
    }).slice(0,8);

    return (
      <div className="landing-slider">
        <span className="landing-tit">Homes</span>
        <div className="landing-cards">
        {homesIndex}
        </div>
        <div className='landing-footer'>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Landing;
