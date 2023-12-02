import React from 'react';
import styled from 'styled-components';

// Estilos para o CartItem
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;

const ItemInfo = styled.div``;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;

// Componente CartItem
const CartItem = ({ item, removeFromCart }) => {
    return (
        <ItemContainer>
            <ItemDetails>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                    <h4>{item.name}</h4>
                    <p>Preço: ${item.price}</p>
                    <p>Quantidade: {item.quantity}</p>
                </ItemInfo>
            </ItemDetails>
            <RemoveButton onClick={() => removeFromCart(item)}>
                Remover
            </RemoveButton>
        </ItemContainer>
    );
};

export default CartItem;
