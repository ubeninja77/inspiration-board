import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {

  // create a random int for assigning different colors to each card
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <div className={`card${getRandomInt(4)}`}>
      <div className="card__content">
        <p className="card__content-text">{props.text}</p>
        <p className="card__content-emoji">{props.emoji}</p>
      </div>
      <button className="card__delete" onClick={() => props.removeCardCallback(props.id)}>Delete</button>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  removeCardCallback: PropTypes.func.isRequired
};

export default Card;
