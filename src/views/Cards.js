import React from 'react';
import Card from '../components/Card';
import { fetchCards, createCard } from '../api/index';
import createMock from '../data/mock';

function CreateCard(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input type="text" name="title" />
                <input type="submit" />
            </form>
        </div>
    );
}

class CardsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cards: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCards = this.updateCards.bind(this);
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

    handleSubmit(e) {
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

    updateCards() {
        createCard(this.state.cards);
    }

    render() {
        const { error, isLoaded, cards } = this.state;
        if (error) {
            return { error };
        } else if (!isLoaded) {
            // console.log('Loading');
            return <h1>Loading</h1>;
        } else {
            console.log(cards);
            return (
                <div>
                    <CreateCard
                        cards={this.state.cards}
                        onSubmit={this.handleSubmit}
                    />
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

export default CardsView;
