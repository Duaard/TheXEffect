import React, { useState, useEffect } from 'react';
import {
  getCards,
  createCard,
  updateCardCell,
  updateCard,
  deleteCard,
} from '../api/index';
import { CardsViewer, Sidebar } from '../components';
import Header from '../components/Header';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './Home.css';

// Presentational component to display home
function Home(props) {
  const { cards, handleCellClick, handleTitleClick } = props;
  return (
    <>
      <Header />
      <CardsViewer
        cards={cards}
        handleClick={handleCellClick}
        handleTitleClick={handleTitleClick}
      />
    </>
  );
}

function HomeContainer() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCards()
      .then((cards) => {
        setCards(cards);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  function handleCellClick(e, cardIdx, cellIdx) {
    // Create a shallow copy of cards & grid
    let nCards = [...cards];
    let grid = [...nCards[cardIdx].grid];

    // Get value of cell when clicked
    const clicked = cards[cardIdx].grid[cellIdx];
    // Formulate new value
    const value = clicked === 'o' ? '' : clicked === 'x' ? 'o' : 'x';

    // Send API request
    // TODO: Handle when update fails
    updateCardCell(nCards[cardIdx]._id, cellIdx, value).then(() => {
      // Assign new calue to grid and nCards
      grid[cellIdx] = value;
      nCards[cardIdx] = { ...nCards[cardIdx], grid: grid };
      setCards(nCards);
      setSelectedCard({ ...[...nCards][cardIdx], cardIdx });
    });
  }

  function handleTitleClick(e, idx) {
    // Set the selected card
    setSelectedCard({ ...[...cards][idx], idx });
  }

  function handleCardCreate(card) {
    createCard(card).then((_id) => {
      const nCards = [...cards];
      nCards.push({ ...card, _id });
      setCards(nCards);
      alert('Card created!');
    });
  }

  function handleCardUpdate(card) {
    updateCard(card).then(() => {
      const nCards = [...cards];
      nCards[selectedCard.idx] = card;
      setCards(nCards);
      alert('Card updated!');
    });
  }

  function handleCardDelete() {
    const card = selectedCard;
    deleteCard(card._id).then(() => {
      // Update the cards
      const nCards = [...cards];
      nCards.splice(selectedCard.idx, 1);
      setCards(nCards);
      setSelectedCard(null);
      alert('Card deleted!');
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There seems to be an error</h1>;
  }

  const homeProps = {
    cards,
    handleCellClick,
    handleTitleClick,
  };

  return <Home {...homeProps} />;
}

export default HomeContainer;
