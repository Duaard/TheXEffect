import React, { useState } from 'react';
import './Grid.css';

// Basic box, used in grid as a cell
const Box = (props) => {
    const [mark, setMark] = useState(0);

    // console.log(mark);
    return (
        <div className={'box' + props.customClass}>
            <span className={'cell-label'}>{props.label}</span>
            <button
                className={'cell-button ' + mark}
                onClick={() => {
                    setMark(mark == 'x' ? 'o' : 'x');
                }}
            />
        </div>
    );
};

// Creates a row of boxes from a data props containing an array of values
const Row = (props) => {
    return (
        <div className="row">
            {props.data.map((obj) => {
                return (
                    <Box
                        label={obj.val}
                        customClass={obj.customClass}
                        mark={obj.mark}
                    />
                );
            })}
        </div>
    );
};

// Provide a 7x7 grid
const Grid = (props) => {
    // Grid has a data props which contains a 7x7
    // matrix containing the data to render
    let grid = props.data.map((row) => {
        // Process the data into individual rows
        return <Row data={row} />;
    });

    return <div className="grid">{grid}</div>;
};

export { Grid, Row };
