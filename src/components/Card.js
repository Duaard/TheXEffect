import React from 'react';
import { Grid } from './Grid';
import data from '../data/mock';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: data,
        };
    }

    handleClick = (rowId, colId) => {
        // Change the value of grid[rowId, colId]
        let newGrid = this.state.grid;
        newGrid[rowId][colId] = newGrid[rowId][colId] === 'x' ? 'o' : 'x';
        this.setState({
            grid: newGrid,
        });
    };

    // componentDidMount() {
    //     let newGrid = this.state.grid;
    //     newGrid[0][0] = 'x';
    //     this.setState({
    //         grid: newGrid,
    //     });
    // }

    render() {
        return (
            <div>
                <h1>Card Title</h1>
                <Grid data={this.state.grid} onClick={this.handleClick} />
            </div>
        );
    }
}

export default Card;
