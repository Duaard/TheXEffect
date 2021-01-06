const api = 'http://localhost:3000';

async function fetchCards() {
    // Return the cards
    const res = await fetch(api + '/cards');

    // TODO: error handling
    const data = await res.json();
    return data;
}

export { fetchCards };
