import styled from "styled-components";

export const Form = styled.form`

  h1 {
    font-size: 2.3rem;
    text-transform: uppercase;
    margin: 1.5rem;
    color: #fff;
    font-weight: 500;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    
    label {
      margin-bottom: 5px;
      font-size: 1rem;
      font-weight: 600;
      color: green;
    }

    input {
      width: 100%;
      padding: 0 0 0 1rem;
      height: 3rem;
      border-radius: 0.25rem;
      border: 1px  solid #d7d7d7;
      background: #e7e9ee;
      color: var(--preto);
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0.2rem 0 1rem 0;
    } 
  }

  button[type="submit"] {
    width: 102%;
    padding: 0 0 0 1rem;
    height: 3rem;
    background: green;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-weight: 400;
    font-size: 1.5rem;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }
`;
