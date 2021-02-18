import React from 'react';
import './Stats.css';

function Stats(props) {
  const { card } = props;

  if (!card) {
    return (
      <div className="stats-container">
        <h3>Click a card title to see stats</h3>
      </div>
    );
  }

  return (
    <div className="stats-container">
      <div className="stats-title">{card.title}</div>
      <div className="stats-pane">
        <Info grid={card.grid} />
      </div>
    </div>
  );
}

function Info(props) {
  const { grid } = props;
  return (
    <>
      <div className="stats-item">
        {`Total X: ${grid.reduce(
          (count, cell) => (count += cell === 'x' ? 1 : 0),
          0
        )}`}
      </div>
      <div className="stats-item">
        {`Total O: ${grid.reduce(
          (count, cell) => (count += cell === 'o' ? 1 : 0),
          0
        )}`}
      </div>
    </>
  );
}

function StreakCounter(props) {}

export default Stats;
