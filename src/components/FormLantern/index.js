import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { Form } from './styles';

const initialValue = {
  name: '',
  idade: 0,
  planetaNatal: '',
  setor: 0,
  imageUrl: '',
}

const FormLantern = ({ id }) => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const method = id ? 'put' : 'post';
    const url = id
      ? `http://localhost:5000/lanterns/${id}`
      : 'http://localhost:5000/lanterns'

    axios[method](url, values)
      .then(response => {
        history.push('/');
      });
  }


  return (
    <Form onSubmit={ onSubmit }>
      <h1>Cadastro de Lanternas Verdes</h1>

      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" onChange={ onChange } />
      </div>

      <div className="form-group">
        <label htmlFor="idade">Idade</label>
        <input type="number" name="idade" id="idade" onChange={ onChange } />
      </div>

      <div className="form-group">
        <label htmlFor="planetaNatal">Planeta Natal</label>
        <input type="text" name="planetaNatal" id="planetaNatal" onChange={ onChange } />
      </div>

      <div className="form-group">
        <label htmlFor="setor">Setor</label>
        <input type="number" name="setor" id="setor" onChange={ onChange } />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Imagem (URL)</label>
        <input type="text" name="imageUrl" id="imageUrl" onChange={ onChange } />
      </div>

      <button type="submit">Salvar</button>
    </Form>
  );
};

export default FormLantern;

