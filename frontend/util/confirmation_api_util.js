export const fetchConfirmation = id => (
  $.ajax({
    method: 'GET',
    url: `api/confirmations/${id}`,
  })
);

export const createConfirmation = confirmation => (
  $.ajax({
    method: 'POST',
    url: 'api/confirmations',
    data: { confirmation },
  })
);

export const deleteConfirmation = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/confirmations/${id}`,
  })
);
