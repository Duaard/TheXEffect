import React from 'react';
import './Grid.css';

const COL = 7; // Number of columns

// Basic box, used in grid as a cell
const Box = (props) => {
    let label = COL * props.rowId + props.colId + 1;
    return (
        <div className={'box ' + props.customClass}>
            <span className={'cell-label'}>{label}</span>
            <button
                className={'cell-button ' + props.value}
                onClick={props.onClick.bind(
                    this,
                    props.cardIdx,
                    props.rowId,
                    props.colId
                )}
            />
        </div>
    );
};

// Creates a row of boxes from a data props
// containing an array of values
const Row = (props) => {
    // Build cells compromising rows
    let colId = 0;
    let customClass = '';
    let rows = props.data.map((val) => {
        customClass = colId === props.data.length - 1 ? 'box-right ' : '';
        return (
            <Box
                key={colId}
                cardIdx={props.cardIdx}
                colId={colId++}
                rowId={props.rowId}
                value={val}
                customClass={props.customClass + customClass}
                onClick={props.onClick}
            />
        );
    });
    return <div className="row">{rows}</div>;
};

// Provide a 7x7 grid
// Grid has a data props which contains a 7x7
// matrix containing the data to render
const Grid = (props) => {
    // Build the rows of the grid to be rendered
    let rowId = 0;
    let customClass = '';
    let grid = props.data.map((row) => {
        // Process the data into individual rows
        customClass = rowId === props.data.length - 1 ? 'box-bottom ' : '';
        return (
            <Row
                key={rowId}
                cardIdx={props.cardIdx}
                rowId={rowId++}
                data={row}
                onClick={props.onClick}
                customClass={customClass}
            />
        );
    });

    return <div className="grid">{grid}</div>;
};

export { Grid, Row };
