import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: #000;
  opacity: 0.8;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 4rem;
  padding: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 300px;
    height: 155px;
  }
  
  .link {
    font-size: 1.2rem;
    color: #fff;
    background-color: #000;
    border: 0;
    border-radius: 0.25rem;
    text-decoration: none;
    padding: 1.5rem 3rem;
    font-weight: 600;
    transition: all 0.2s;
    border: 1px solid green;

    &:hover{
      border: 1px solid #fff;
    }
  }
`;