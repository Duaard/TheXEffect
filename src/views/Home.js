import React, { useState, useEffect } from 'react';
import { fetchCards, createCard } from '../api/index';
import { CardsViewer, Sidebar } from '../components';
import './Home.css';

function Home() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCards()
      .then((cards) => {
        setCards(cards);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  function handleClick(e, cardIdx, cellIdx) {
    // Create a shallow copy of cards & grid
    let nCards = [...cards];
    let grid = [...nCards[cardIdx].grid];

    // Get value of cell when clicked
    const clicked = cards[cardIdx].grid[cellIdx];
    // Formulate new value
    const value = clicked === 'o' ? '' : clicked === 'x' ? 'o' : 'x';

    // Assign new calue to grid and nCards
    grid[cellIdx] = value;
    nCards[cardIdx] = { ...nCards[cardIdx], grid: grid };

    setCards(nCards);
    // Update cards values
    createCard(nCards);
  }

  function handleTitleClick(e, idx) {
    // Set the selected card
    // console.log(e);
    setSelectedCard([...cards][idx]);
  }

  function handleCardCreate(e, card) {
    const nCards = [...cards];
    nCards.push(card);
    setCards(nCards);
    createCard(nCards);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There seems to be an error</h1>;
  }

  return (
    <>
      <Sidebar handleSubmit={handleCardCreate} selectedCard={selectedCard} />
      <main>
        <CardsViewer
          cards={cards}
          handleClick={handleClick}
          handleTitleClick={handleTitleClick}
        />
      </main>
    </>
  );
}

export default Home;
