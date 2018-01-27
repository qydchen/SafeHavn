import React from 'react';
import { withRouter} from 'react-router-dom';
import { findLatLng } from '../../util/map_api_util';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findLatLng = findLatLng.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById("search-field");
    let autocomplete = new google.maps.places.Autocomplete(input);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({place: this.input.value});
    let currentInput = this.input.value;
    e.target.firstChild.value = '';
    let bounds = {};
    this.findLatLng(currentInput)
      .then(res => {
        debugger;
        bounds = res.results[0].geometry.viewport;
      })
      .then(this.props.updateFilter('bounds', bounds));

    ;
  }

  render() {
    return (
      <form className="search-container" ref={form => this.form = form} onSubmit={this.handleSubmit}>
        <input
          type="search"
          id="search-field"
          placeholder="Anywhere"
          ref={input => this.input = input}
          onChange={this.update('place')}
        />
      </form>
    );
  }
};

export default withRouter(SearchBar);
