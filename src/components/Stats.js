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

  return <Info grid={card.grid} />;
}

function Info(props) {
  const { grid } = props;
  return (
    <>
      <div className="card-stats-left stats-item">
        <span>{`X: ${grid.reduce(
          (count, cell) => (count += cell === 'x' ? 1 : 0),
          0
        )}`}</span>
        <span>{`O: ${grid.reduce(
          (count, cell) => (count += cell === 'o' ? 1 : 0),
          0
        )}`}</span>
      </div>
      <div className="card-stats-right stats-item">
        <StreakCounter {...props} />
      </div>
    </>
  );
}

// Presentational component to render current streak and longest streak
function StreakCounter(props) {
  const { grid } = props;
  let [longest, current] = [0, 0];
  for (let cell of grid) {
    if (cell === '' || cell == null) break;
    current = cell === 'x' ? current + 1 : 0;
    longest = Math.max(longest, current);
  }

  return (
    <>
      <span>{`Current Streak: ${current}`}</span>
      <span>{`Longest Streak: ${longest}`}</span>
    </>
  );
}

export default Stats;
