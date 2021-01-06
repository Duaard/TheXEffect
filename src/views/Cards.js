import React from 'react';
import Card from '../components/Card';
import { fetchCards } from '../api/index';

class CardsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cards: [],
        };
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

    render() {
        const { error, isLoaded, cards } = this.state;
        if (error) {
            return { error };
        } else if (!isLoaded) {
            console.log('Loading');
            return <h1>Loading</h1>;
        } else {
            console.log(cards);
            return (
                <div>
                    {cards.map((card) => {
                        return <Card />;
                    })}
                </div>
            );
        }
    }
}

export default CardsView;
