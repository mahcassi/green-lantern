import React from 'react';
import { CardContainer } from './styles';

const Card = ({ lantern }) => {
  return (
    <CardContainer>
      <div className="img-wrapper">
        <img src={ lantern.imageUrl } alt="green lantern" />
      </div>

      <div className="info-card">
        <h1>{ lantern.name }</h1>
        <p><span className="p-weight">Idade: </span>{ lantern.idade } anos</p>
        <p><span className="p-weight">Planeta: </span>{ lantern.planetaNatal }</p>
        <p><span className="p-weight">Setor: </span>{ lantern.setor }</p>
      </div>
    </CardContainer>
  );
}

export default Card;