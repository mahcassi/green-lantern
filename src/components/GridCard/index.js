import React from 'react';
import Card from '../Card/index';
import { Container } from './styles';

const GridCard = () => {
  const card = {
    "id": 1,
    "name": "Maria Eduarda",
    "idade": 18,
    "imageUrl": "https://i.pinimg.com/originals/5e/6a/8e/5e6a8edda5c9ec7c75eddf47b8026051.jpg",
    "planetaNatal": "lanterna",
    "setor": 52
  };

  return (
    <Container>
      <Card card={card}/>
      <Card card={card}/>
      <Card card={card}/>
      <Card card={card}/>
      <Card card={card}/>
      <Card card={card}/>
    </Container>
  );

}

export default GridCard;