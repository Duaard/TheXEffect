import React from 'react';
import { Grid } from './Grid';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: props.grid,
            title: props.title,
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
                <h1>{this.state.title}</h1>
                <Grid data={this.state.grid} onClick={this.handleClick} />
            </div>
        );
    }
}

export default Card;
