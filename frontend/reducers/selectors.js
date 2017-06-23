import { values } from 'lodash';

export const yearsRange = () => {
  const range = [];

  for (let i = 2017; i >= 1905; i--) {
    range.push(i);
  }

  return range;
};

export const selectHome = ({ entities, reviews }, id) => {
   const home = entities.homes[id] || {};
   return home
};

export const selectAll = (object) => {
  return _.values(object)
}
//
// export const asArray = ( entity ) => (
//   Object.keys(entity).map(key => entity[key])
// );
