import React from 'react';
import { homeCard } from './home_card';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { homes } = this.props;
    const homesIndex = homes.map((home, idx) => {
      return (
        <div className="home-card-container" key={idx}>
          {homeCard(home)}
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
