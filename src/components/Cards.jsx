import React, { useState, useEffect } from 'react';
import PokemonFetcher from '../API/Api';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [counter, setCounter] = useState(0);

  setCards(() => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(<PokemonFetcher />);
    }
    return cards;
  });

  useEffect(() => {
    // Shuffle the cards when the component mounts
    shuffleCards();
  }, []);

    const shuffleCards = () => {
        const shuffledCards = [...cards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        setCards(shuffledCards);
    };

  const handleCardClick = (cardId) => {
    // Logic to handle card click goes here
    // ...
    if (/* Card is repeated */) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div>
      {/* Render the grid of cards */}
      {/* ... */}
      <p>Counter: {counter}</p>
    </div>
  );
};

export default Cards;
