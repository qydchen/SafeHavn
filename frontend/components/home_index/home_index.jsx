import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  safeHavn(home) {
    return (
      <div className="home-card">
        <Link to={`/homes/${home.id}`} className="link-to">
          <div className="show-card-container">
            <img className="show-card" src={home.image_url}/>
          </div>
          <div className="card-top-row">
            <div className="card-bold">${home.price} {home.title}</div>
          </div>
          <div className="card-bot-row">
            <div className="card-norm">{home.space.room_type} · {home.space.beds} beds</div>
            <div className="card-norm">Rated {home.avg} out of 10 · {home.reviews} reviews</div>
          </div>
        </Link>
      </div>
    )
  }

  render() {
    const { homes } = this.props;
    const homesIndex = homes.map((home, idx) => {
      return (
        <div className="home-card-container" key={idx}>
          {this.safeHavn(home)}
        </div>
      )
    })
    return (
      <div className="home-card-slider">
        <div className="cards">
        {homesIndex}
        </div>
      </div>
    )
  }
}

export default HomeIndex;
