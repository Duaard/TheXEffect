import React from 'react';
import Card from './components/Card';
import createMock from './data/mock';

let cards = ['card1', 'card2', 'card3'];
let mock = createMock(cards);

const App = () => {
    return (
        <div>
            {mock.map((card) => {
                return (
                    <Card key={card.id} grid={card.grid} title={card.title} />
                );
            })}
        </div>
    );
};

export default App;
