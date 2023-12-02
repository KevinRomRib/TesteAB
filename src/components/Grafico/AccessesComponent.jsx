import React from 'react';
import styled from 'styled-components';

const AccessContainer = styled.div`
  background-color: #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  color: #2d3748;
  margin-bottom: 15px;
`;

const AccessesComponent = ({ accesses }) => {
    const accessesA = accesses.filter(a => a.page === 'a').length;
    const accessesB = accesses.filter(a => a.page === 'b').length;

    return (
        <AccessContainer>
            <Title>Acessos</Title>
            <p>Página A: {accessesA}</p>
            <p>Página B: {accessesB}</p>
        </AccessContainer>
    );
};

export default AccessesComponent;
