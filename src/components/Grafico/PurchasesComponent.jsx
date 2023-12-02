import React from 'react';
import styled from 'styled-components';

const PurchaseContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #4a5568;
  margin-bottom: 15px;
`;

const PurchasesComponent = ({ purchases }) => {
    const purchasesA = purchases.filter(p => p.page === 'a').length;
    const purchasesB = purchases.filter(p => p.page === 'b').length;

    return (
        <PurchaseContainer>
            <Title>Compras</Title>
            <p>Página A: {purchasesA}</p>
            <p>Página B: {purchasesB}</p>
        </PurchaseContainer>
    );
};

export default PurchasesComponent;
