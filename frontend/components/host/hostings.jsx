import React from 'react';
import { withRouter } from 'react-router-dom';

class Hostings extends React.Component {
  constructor(props){
   super(props);
  }

  componentDidMount() {
    this.props.fetchHome(this.props.homeid);
    this.props.fetchReviews(this.props.homeid);
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.match.params.homeid !== nextProps.match.params.homeid) {
    this.props.fetchHome(nextProps.match.params.homeid);
    }
  }

  render() {
  }
}

export default withRouter(Hostings);
