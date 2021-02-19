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
      <StreakCounter {...props} />
      <div className="stats-item">
        {`X: ${grid.reduce(
          (count, cell) => (count += cell === 'x' ? 1 : 0),
          0
        )}`}
      </div>
      <div className="stats-item">
        {`O: ${grid.reduce(
          (count, cell) => (count += cell === 'o' ? 1 : 0),
          0
        )}`}
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
      <div className="stats-item">{`Current Streak: ${current}`}</div>
      <div className="stats-item">{`Longest Streak: ${longest}`}</div>
    </>
  );
}

export default Stats;
