export const yearsRange = () => {
  const range = [];

  for (let i = 2017; i >= 1905; i--) {
    range.push(i);
  }

  return range;
};
