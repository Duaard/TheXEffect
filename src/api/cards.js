const api = 'http://localhost:3000';
const endpoint = '/cards';

// Return cards from api
export async function getCards() {
  const res = await fetch(api + endpoint);

  // TODO: error handling
  const data = await res.json();
  return data;
}

// Create a new card
export async function createCard(card) {
  const res = await fetch(api + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
  const data = await res.json();
  return data._id;
}

// Send a put request to handle cell click
export async function updateCardCell(id, cellIdx, value) {
  const res = await fetch(`${api}${endpoint}/${id}/${cellIdx}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: value }),
  });

  // TODO: Handle when API call fails
  const data = await res.json();
  return data;
}

// Update card using id
export async function updateCard(card) {
  const res = await fetch(`${api}${endpoint}/${card._id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...card }),
  });

  // TODO: Handle when API call fails
  const data = await res.json();
  return data;
}

// Delete card using id
export async function deleteCard(id) {
  const res = await fetch(`${api}${endpoint}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  // TODO: Handle when API call fails
  const data = await res.json();
  return data;
}
