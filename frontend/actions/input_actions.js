export const RECEIVE_INPUT = 'RECEIVE_INPUT';

export const receiveInput = ({ startDate, endDate, guests }) => ({
  type: RECEIVE_INPUT,
  startDate,
  endDate,
  guests,
});
