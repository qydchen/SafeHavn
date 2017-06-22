import React from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../../actions/home_actions';

const cancellationText = {
  Strict: "Cancel up to 7 days before your trip and get a 50% refund plus service fees back.",
  Moderate: "Cancel up to 5 days before your trip and get a full refund, including service fees.",
  Flexible: "Cancel up to 24 hours before your trip and get a full refund, including service fees."
}

const mapStateToProps = (state) => {
  space: selectAll(state.space),
  amenity: selectAll(state.amenity),
  trips: selectAll(state.trips), // for availability??
  price,
  image_url,
  title,
  description,
  cancellation,
  cancelText: cancellationText[cancellation],
  address,
  max_guests,
}

const mapDispatchToProps = (dispatch) => {
  fetchHome: id => dispatch(fetchHome(id))
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
