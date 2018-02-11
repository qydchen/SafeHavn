import React from 'react';
import { homeCard } from '../home_index/home_card';

class Hostings extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if (this.isLoggedIn()) {
      this.props.fetchMyHomes();
    }
  }

  componentDidUpdate() {
    this.isLoggedIn();
  }

  isLoggedIn() {
    if (!this.props.loggedIn) {
      this.props.history.push(`/homes`)
      return false;
    } else {
      return true;
    }
  }

  render() {
    let {loggedIn, homes} = this.props;
    let homeCards;
    if (homes) {
      homeCards = homes.map((home, idx) => {
        return (
          <div className="home-card-container" key={idx}>
            {homeCard(home)}
          </div>
        )
      }
    )}

    if (loggedIn) {
      return (
        <section className='home-card-slider hostings-container'>
          {homeCards}
        </section>
      )
    }
    return null;
  }
}

export default Hostings;
