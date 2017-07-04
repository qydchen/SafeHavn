import { values } from 'lodash';

export const yearsRange = () => {
  const range = [];

  for (let i = 2017; i >= 1905; i--) {
    range.push(i);
  }

  return range;
};

export const selectAll = (object) => {
  return _.values(object)
}

export const trueAmenities = ( amenities ) => {
  let result = [];
  for (var key in amenities) {
    if (amenities[key] === true) {
      result.push(key);
    }
  }
  return result;
};
