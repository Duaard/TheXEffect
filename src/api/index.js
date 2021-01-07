const api = 'http://localhost:3000';

// Return cards from api
async function fetchCards() {
    const res = await fetch(api + '/cards');

    // TODO: error handling
    const data = await res.json();
    return data;
}

// Create a new card
async function createCard(card) {
    console.log('Card created!');
    return await fetch(api + '/cards', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(card),
    });
}

export { fetchCards, createCard };
