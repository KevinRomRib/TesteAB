import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // assumindo que você está usando react-router-dom

// Estilização do container
const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

// Estilização do título
const Title = styled.h1`
  font-size: 5rem;
  color: #333;
`;

// Estilização do texto
const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

// Estilização do Link
const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: #3498db;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Text>Desculpe, não conseguimos encontrar essa página.</Text>
      <StyledLink to="/">Voltar para a página inicial</StyledLink>
    </NotFoundContainer>
  );
}

export default NotFoundPage;
