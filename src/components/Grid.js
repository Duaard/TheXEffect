import React from 'react';
import './Grid.css';

const COL = 7; // Number of columns

// Basic box, used in grid as a cell
const Box = (props) => {
    let { cardIdx, cellIdx } = props;
    let label = cellIdx + 1;
    return (
        <div className={'box ' + props.customClass}>
            <span className={'cell-label'}>{label}</span>
            <button
                className={'cell-button ' + props.value}
                onClick={() => {
                    props.handleClick(cardIdx, cellIdx);
                }}
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
                handleClick={props.handleClick}
            />
        );
    });
    return <div className="row">{rows}</div>;
};

// Provide a grid based on the row and col props
// Grid has a data props array contaning
// cell data and value to render
const Grid = (props) => {
    const { data, row, col } = props;
    // Build the grid to be rendered
    let grid = [];
    for (let r = 0; r < row; r++) {
        // Build the row
        let rowData = [];
        for (let c = 0; c < col; c++) {
            rowData.push(data[r * col + c]);
        }

        let rows = rowData.map((val, idx) => {
            idx += r * col;
            // Custom class for cells in the bottom and right most edge
            let customClass = (idx + 1) % col === 0 ? 'box-right ' : '';
            customClass += idx >= (row - 1) * col ? 'box-bottom ' : '';
            return (
                <Box
                    key={idx}
                    cardIdx={props.cardIdx}
                    cellIdx={idx}
                    value={val}
                    customClass={customClass}
                    handleClick={props.handleClick}
                />
            );
        });

        grid.push(<div className="row">{rows}</div>);
    }

    return <div className="grid">{grid}</div>;
};

export { Grid, Row };
