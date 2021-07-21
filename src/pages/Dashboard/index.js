import React from 'react';
import GridCard from '../../components/GridCard/index';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.jpg';
import { Container, Header, Content } from './styles';

const Dashboard = () => {
  return (
    <>
      <Header>
        <Content>
          <img className="logo" src={logoImg} alt="Logo Lanterna Verde" />
          <Link className="link" to="/create">
            Novo Lanterna
          </Link>
        </Content>
      </Header>
      
      <Container>
        <GridCard />
      </Container>
    </>
  );
}

export default Dashboard;