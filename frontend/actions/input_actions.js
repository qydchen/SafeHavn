export const RECEIVE_INPUT = 'RECEIVE_INPUT';

export const receiveInput = ({ startDate, endDate, num_guests }) => ({
  type: RECEIVE_INPUT,
  startDate,
  endDate,
  num_guests,
});
