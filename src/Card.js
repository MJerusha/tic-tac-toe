import React from 'react';
import './Card.css';

const suitSymbols = {
  Hearts: '♥',
  Diamonds: '♦',
  Clubs: '♣',
  Spades: '♠'
};

const suitColors = {
  Hearts: 'red',
  Diamonds: 'red',
  Clubs: 'black',
  Spades: 'black'
};

const Card = ({ card }) => {
  const { suit, value } = card;

  return (
    <div className={`card text-center ${suitColors[suit]}`}>
      <div className="card-body">
        <div className="card-value">{value}</div>
        <div className="card-suit">{suitSymbols[suit]}</div>
      </div>
    </div>
  );
};

export default Card;