import React, { useEffect, useState } from 'react';
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

// class CardsViewer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       cards: [],
//     };

//     this.updateCards = this.updateCards.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     fetchCards().then(
//       (data) => {
//         console.log(data);
//         this.setState({
//           cards: data,
//           isLoaded: true,
//         });
//       },
//       (error) => {
//         this.setState({
//           error: error,
//           // cards: [],
//           // isLoaded: true,
//         });
//       }
//     );
//   }

//   // Handles click for a specfic card given
//   // the card index, and the row and col of
//   // the box clicked
//   handleClick(cardIdx, cellIdx) {
//     this.setState((prev) => {

//   }

//   onSubmit(e) {
//     e.preventDefault();
//     let card = {
//       title: e.target.title.value,
//       whys: [],
//       grid: [...Array(ROW * COL)],
//     };
//     let cards = this.state.cards;
//     cards.push(card);
//     this.setState({
//       cards: cards,
//     });
//     createCard(cards);
//   }

//   updateCards(card) {
//     // TODO: Make a PUT request
//     createCard(this.state.cards);
//   }

//   render() {
//     const { error, isLoaded, cards } = this.state;
//     // Create the cards component
//     const cardsComponent = cards.map((card, idx) => (
//       <Card
//         data={card.grid}
//         rowSize={ROW}
//         colSize={COL}
//         //   key={idx}
//         //   cardIdx={idx}
//         title={card.title}
//         //   data={card.grid}
//         //   numRows={ROW}
//         //   numCols={COL}
//         //   handleClick={this.handleClick}
//         //   updateCards={this.updateCards}
//       />
//     ));

//     if (error) {
//       console.log(error);
//       return <h1>There seems to be an error.</h1>;
//     } else if (!isLoaded) {
//       return <h1>Loading</h1>;
//     } else {
//       return (
//         <div className="cards-viewer-container">
//           <div className="create-card">
//             <CreateCard onSubmit={this.onSubmit} />
//           </div>
//           <div className="cards-viewer">{cardsComponent}</div>
//         </div>
//       );
//     }
//   }
// }

function CardsViewer() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCards()
      .then((cards) => {
        setCards(cards);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  function handleClick(e, cardIdx, cellIdx) {
    // Create a shallow copy of cards & grid
    let nCards = [...cards];
    let grid = [...nCards[cardIdx].grid];

    // Get value of cell when clicked
    const clicked = cards[cardIdx].grid[cellIdx];
    // Formulate new value
    const value = clicked === 'o' ? '' : clicked === 'x' ? 'o' : 'x';

    // Assign new calue to grid and nCards
    grid[cellIdx] = value;
    nCards[cardIdx] = { ...nCards[cardIdx], grid: grid };

    setCards(nCards);
    // Update cards values
    createCard(nCards);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There seems to be an error</h1>;
  }
  return (
    <div className="cards-viewer-container">
      <div className="create-card">
        {/* <CreateCard onSubmit={this.onSubmit} /> */}
      </div>
      <div className="cards-viewer">
        {cards.map((card, idx) => (
          <Card
            {...card}
            key={idx}
            cardIdx={idx}
            rowSize={ROW}
            colSize={COL}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsViewer;
