import React from 'react';
import CardsView from './views/Cards';
import createMock from './data/mock';

let cards = ['card1', 'card2', 'card3'];
let mock = createMock(cards);

function App() {
    return (
        <div>
            <CardsView />
        </div>
    );
}

export default App;
