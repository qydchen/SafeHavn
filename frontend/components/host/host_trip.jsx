import React from 'react';
import { withRouter } from 'react-router-dom';

class HostTrip extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     someshit: ""
   }
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSubmit(e) {
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
