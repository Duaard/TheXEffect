import React from 'react';
import { Grid } from './Grid';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <Grid {...props} />
    </div>
  );
}

export { Card };
