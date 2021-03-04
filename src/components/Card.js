import React from 'react';
import { Grid } from './Grid';
import { Stats } from './index';
import Menu from './Menu';
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
      <div className="card-grid-container">
        <Grid {...props} />
      </div>
      <div className="card-stats">
        <Stats card={card} />
      </div>
    </div>
  );
}

function Header(props) {
  const { title, handleTitleClick } = props;
  function logger(word) {
    console.log(word);
  }
  const options = [
    { onClickHandler: logger.bind(logger, 'Edit'), value: 'Edit' },
    { onClickHandler: logger.bind(logger, 'Delete'), value: 'Delete' },
  ];
  return (
    <div className="card-header">
      <span onClick={handleTitleClick}>{title}</span>
      <div className="card-menu">
        <Menu items={options} />
      </div>
    </div>
  );
}

export { Card };
