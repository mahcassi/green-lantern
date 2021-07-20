import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    color: #515151;
    --webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) 100%), url('https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80') center 100%;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;