import React from 'react';
import { withRouter } from 'react-router-dom';

class HostTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      title: "",
      description: "",
      address: "",
      max_guests: 2,
      

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let userid = this.props.currentUser.id;

    this.props.createHome(this.state);
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  render() {
  }
}

export default withRouter(HostTrip);
