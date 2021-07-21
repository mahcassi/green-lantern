import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import FormLantern from '../../components/FormLantern';

const Form = () => {
  const {id} = useParams(); 

  return (
    <Container>
      <FormLantern id={id ? Number.parseInt(id, 10) : null}/>
    </Container>
  );
}

export default Form;