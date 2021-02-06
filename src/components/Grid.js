import React, { useState } from 'react';
import './Grid.css';

// Stateful box
function Box(props) {
  const { cardIdx, cellIdx, value, customClass, label } = props;

  function handleClick(e) {
    props.handleClick(e, cardIdx, cellIdx);
  }

  return (
    <div className={'box ' + customClass}>
      <span className={'cell-label'}>{label}</span>
      <button className={'cell-button ' + value} onClick={handleClick} />
    </div>
  );
}

// Provide grid of stateful boxes
function Grid(props) {
  const { grid, rowSize, colSize } = props;
  const gridContainer = grid.map((cell, idx) => {
    const lastRowClass =
      Math.floor(idx / colSize) === rowSize - 1 ? 'box-bottom ' : '';
    const lastColClass = idx % colSize === colSize - 1 ? 'box-right ' : '';
    return (
      <Box
        {...props}
        key={idx}
        cellIdx={idx}
        label={idx + 1}
        customClass={lastRowClass + lastColClass}
        value={cell}
      />
    );
  });
  return <div className="grid">{gridContainer}</div>;
}

export { Grid };
