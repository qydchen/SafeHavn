export const RECEIVE_INPUT = 'RECEIVE_INPUT';
export const RECEIVE_CONFIRMATION = 'RECEIVE_CONFIRMATION';
export const CLEAR_CONFIRMATION = 'CLEAR_CONFIRMATION';

export const receiveInput = ({ startDate, endDate, numGuests }) => ({
  type: RECEIVE_INPUT,
  startDate,
  endDate,
  numGuests,
});

export const bookingConfirmation = (confirmation) => ({
  type: RECEIVE_CONFIRMATION,
  confirmation
});

export const clearConfirmation = () => ({
  type: CLEAR_CONFIRMATION,
});
