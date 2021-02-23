import React from 'react';
import { Grid } from './Grid';
import { Stats } from './index';
import { FaEllipsisH } from 'react-icons/fa';
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
      <Header title={props.title} handleTitleClick={handleTitleClick} />
      <Grid {...props} />
      <Stats card={card} />
    </div>
  );
}

function Header(props) {
  const { title, handleTitleClick } = props;
  return (
    <div className="card-header">
      <span onClick={handleTitleClick}>{title}</span>
      <div className="card-menu">
        <span>
          <FaEllipsisH />
        </span>
      </div>
    </div>
  );
}

export { Card };
