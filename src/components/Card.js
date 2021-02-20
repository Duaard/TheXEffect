import React from 'react';
import { Grid } from './Grid';
import { Stats } from './index';
import './Card.css';

function Card(props) {
  function handleTitleClick(e) {
    props.handleTitleClick(e, props.cardIdx);
  }

  const card = {
    title: props.title,
    whys: props.whys,
    grid: props.grid,
  };

  return (
    <div className="card">
      <div className="card-header">
        <span onClick={handleTitleClick}>{props.title}</span>
      </div>
      <Grid {...props} />
      <Stats card={card} />
    </div>
  );
}

export { Card };
