import React from 'react';
import { Card } from '../components/Card';
import './CardsViewer.css';

const ROW = 7,
  COL = 7;

function CardsViewer(props) {
  const { cards, handleClick, handleTitleClick } = props;

  return (
    <div className="cards-viewer-container">
      <div className="cards-viewer">
        {cards.map((card, idx) => (
          <Card
            {...card}
            key={idx}
            cardIdx={idx}
            rowSize={ROW}
            colSize={COL}
            handleClick={handleClick}
            handleTitleClick={handleTitleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsViewer;
