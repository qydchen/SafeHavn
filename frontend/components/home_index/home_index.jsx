import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import HomeShowContainer from '../home_show/home_show_container.js';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
  }


  componentDidMount(){
    this.props.fetchHomes();
  }


  // handleClick(e){
  //   e.preventDefault;
  //   this.props.fetchHome(e.id).then(redirect to home url);
  // }

// <input type="checkbox" className="save-wishlist"></input> for the heart box when ready

  safeHavn(home) {

    return (
      <Link to={`/homes/${home.id}`} className="link-to">
        <div className="home-card">

        <img className="show-card" src={home.image_url}/>

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
        <div className="home-card-container" key={idx}>
          {this.safeHavn(home)}
        </div>
      )
    })
    return (
      <section className='index-container'>
        <div className="home-card-slider">
          {homesIndex}
        </div>
        <div className="map-container-rel">
          <div className="map-abs"></div>
        </div>
      </section>
    )
  }
}

export default HomeIndex;
