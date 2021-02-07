import React from 'react';
import { Grid } from './Grid';
import './Card.css';

function Card(props) {
  function handleTitleClick(e) {
    props.handleTitleClick(e, props.cardIdx);
  }

  return (
    <div className="card">
      <h1 onClick={handleTitleClick}>{props.title}</h1>
      <Grid {...props} />
    </div>
  );
}

export { Card };
