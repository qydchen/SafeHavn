import React from 'react';
import { withRouter } from 'react-router-dom';

class HostTrip extends React.Component {
  constructor(props){
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  render() {
  }
}

export default withRouter(HostTrip);
