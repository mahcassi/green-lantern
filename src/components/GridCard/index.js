import React, { useEffect, useState } from 'react';
import Card from '../Card/index';
import { Container } from './styles';
import axios from 'axios';

const GridCard = () => {

  const [lanterns, setLanterns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/lanterns').then((response) => {
      setLanterns(response.data);
    })
  },[]);

  return (
    <Container>
      {lanterns.map((lantern) => (
        <Card lantern={ lantern } />
      ))}
    </Container>
  );
}

export default GridCard;