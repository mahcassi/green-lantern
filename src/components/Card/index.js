import React from 'react';
import { CardContainer } from './styles';

const Card = ({ card }) => {
  return (
    <CardContainer>
      <div className="img-wrapper">
        <img src={ card.imageUrl } alt="green lantern" />
      </div>

      <div className="info-card">
        <h1>{ card.name }</h1>
        <p><span className="p-weight">Idade: </span>{ card.idade } anos</p>
        <p><span className="p-weight">Planeta: </span>{ card.planetaNatal }</p>
        <p>
          <span className="p-weight">Setor: </span>{ card.setor }</p>
      </div>
    </CardContainer>
  );
}

export default Card;