import React from 'react';
import { Card } from '../components/Card';
import { fetchCards, createCard } from '../api/index';
import './CardsViewer.css';

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
                });
            }
        );
    }

    onSubmit(e) {
        e.preventDefault();
        let card = {
            title: e.target.title.value,
            whys: [],
            grid: [...Array(7)].map(() => {
                return [...Array(7)];
            }),
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
            return <h1>Can't reach API</h1>;
        } else if (!isLoaded) {
            // console.log('Loading');
            return <h1>Loading</h1>;
        } else {
            console.log(cards);
            return (
                <div className="cards-viewer">
                    {cards.map((card) => {
                        return (
                            <Card
                                key={card.title}
                                title={card.title}
                                grid={card.grid}
                                updateCards={this.updateCards}
                            />
                        );
                    })}
                </div>
            );
        }
    }
}

export default CardsViewer;
