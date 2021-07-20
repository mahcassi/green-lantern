import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

const Form = () => {
  const {id} = useParams(); 

  return (
    <Container>
      <h1>hhuh</h1>
      {id && <div>id: {id}</div>}
    </Container>
  );
}

export default Form;