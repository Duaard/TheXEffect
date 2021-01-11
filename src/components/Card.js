import React from 'react';
import { Grid } from './Grid';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: props.grid,
            title: props.title,
            updateCards: props.updateCards,
        };

        // Binding for `this`
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(rowId, colId) {
        // Change the value of grid[rowId, colId]
        let newGrid = this.state.grid;
        let cell = newGrid[rowId][colId];
        newGrid[rowId][colId] = cell === 'o' ? '' : cell === 'x' ? 'o' : 'x';
        this.setState({
            grid: newGrid,
        });
        this.state.updateCards();
    }

    render() {
        return (
            <div className="card">
                <h1>{this.state.title}</h1>
                <Grid data={this.state.grid} onClick={this.handleClick} />
            </div>
        );
    }
}

export { Card };
