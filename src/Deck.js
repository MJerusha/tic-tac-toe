import React, { useState, useEffect } from 'react';
import Card from './Card';

const Deck = ({ numPeople }) => {
  const [deck, setDeck] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    initializeDeck();
  }, []);

  const initializeDeck = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = [
      '2', '3', '4', '5', '6', '7', '8', '9', '10',
      'J', 'Q', 'K', 'A'
    ];
    let newDeck = [];

    for (let suit of suits) {
      for (let value of values) {
        newDeck.push({ suit, value });
      }
    }

    newDeck = shuffleDeck(newDeck);
    setDeck(newDeck);
    setCurrentCards(Array(numPeople).fill(null));
  };

  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  const drawCard = (index) => {
    if (deck.length > 0) {
      const newDeck = [...deck];
      const card = newDeck.pop();
      const newCards = [...currentCards];
      newCards[index] = card;
      setDeck(newDeck);
      setCurrentCards(newCards);
    } else {
      setCurrentCards(Array(numPeople).fill(null));
      setDeck([]);
    }
  };

  return (
    <div>
      <div className="row">
        {Array.from({ length: numPeople }).map((_, index) => (
          <div className="col-3 mb-3" key={index}>
            <button className="btn btn-primary mb-3" onClick={() => drawCard(index)}>
              Draw Card for Person {index + 1}
            </button>
            {currentCards[index] ? (
              <Card card={currentCards[index]} />
            ) : (
              <div className="alert alert-info">No card drawn yet!</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deck;