import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import FormLantern from '../../components/FormLantern';

const Form = () => {
  const {id} = useParams(); 

  return (
    <Container>
      <FormLantern />
    </Container>
  );
}

export default Form;