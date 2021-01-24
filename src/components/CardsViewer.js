import React from 'react';
import { Card } from '../components/Card';
import { fetchCards, createCard } from '../api/index';
import './CardsViewer.css';

const ROW = 7,
    COL = 7;

function CreateCard(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input type="text" name="title" />
                <input type="submit" value="Add Card" />
            </form>
        </div>
    );
}

class CardsViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cards: [],
        };

        this.updateCards = this.updateCards.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetchCards().then(
            (data) => {
                this.setState({
                    cards: data,
                    isLoaded: true,
                });
            },
            (error) => {
                this.setState({
                    error: error,
                    // cards: [],
                    // isLoaded: true,
                });
            }
        );
    }

    // Handles click for a specfic card given
    // the card index, and the row and col of
    // the box clicked
    handleClick(cardIdx, cellIdx) {
        this.setState((prev) => {
            // Create a shallow copy of cards & grid
            let cards = [...prev.cards];
            let grid = [...cards[cardIdx].grid];

            // Get value of cell when clicked
            let clicked = prev.cards[cardIdx].grid[cellIdx];
            // Formulate new value
            let value = clicked === 'o' ? '' : clicked === 'x' ? 'o' : 'x';

            // Assign new calue to nGrid and nCards
            grid[cellIdx] = value;
            cards[cardIdx] = { ...cards[cardIdx], grid: grid };

            return {
                cards: cards,
            };
        });
    }

    onSubmit(e) {
        e.preventDefault();
        let card = {
            title: e.target.title.value,
            whys: [],
            grid: [...Array(ROW * COL)],
        };
        let cards = this.state.cards;
        cards.push(card);
        this.setState({
            cards: cards,
        });
        createCard(cards);
    }

    updateCards(card) {
        // TODO: Make a PUT request
        createCard(this.state.cards);
    }

    render() {
        const { error, isLoaded, cards } = this.state;
        if (error) {
            console.log(error);
            return <h1>There seems to be an error.</h1>;
        } else if (!isLoaded) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div className="cards-viewer-container">
                    <div className="create-card">
                        <CreateCard onSubmit={this.onSubmit} />
                    </div>
                    <div className="cards-viewer">
                        {cards.map((card, i) => {
                            return (
                                <Card
                                    key={card.title}
                                    cardIdx={i}
                                    title={card.title}
                                    grid={card.grid}
                                    row={ROW}
                                    col={COL}
                                    handleClick={this.handleClick}
                                    updateCards={this.updateCards}
                                />
                            );
                        })}
                    </div>
                </div>
            );
        }
    }
}

export default CardsViewer;
