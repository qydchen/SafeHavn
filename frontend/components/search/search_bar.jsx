import React from 'react';
import { withRouter} from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let address = this.input.value;
    e.target.firstChild.value = '';
    this.props.fetchMapInfo(address).then(() => {
      this.props.history.push(`/homes`);
    })
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
