import React from 'react';
import { homeCard } from '../home_index/home_card'
import Footer from '../footer';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {
    const { homes } = this.props;
    const homesIndex = homes.map((home, idx) => {
      return (
        <div className="landing-card-container" key={idx}>
          {homeCard(home)}
        </div>
      )
    }).slice(0,8);

    return (
      <div className="landing-slider">
        <div className="landing-container">
          <div className="landing-blurb">
            <span className="color-blurb">SafeHavn </span>
            Find your refuge.
          </div>
        </div>
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
