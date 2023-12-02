import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaX } from "react-icons/fa6";
import CartItem from '../CartItem/cartitem';

// Estilo do fundo invisível e do carrinho visível
const OffsideWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9990;
  display: flex;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.168); // Fundo semi-transparente
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: opacity 0.1s ease-in-out, transform 0.5s ease-in-out, visibility 0.5s ease-in-out;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  cursor: pointer;
  opacity: ${props => props.isOpen ? '1' : '0'};
`;

const CartContainer = styled.div`
  width: 40vw;
  height: 100%;
  z-index: 9991;
  padding-right: 2rem;
  background: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: white; /* Opcional: cor de fundo do cabeçalho */
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1); /* Opcional: sombra para destacar o cabeçalho */
  z-index: 2; /* Garantir que o cabeçalho fique sobre o Body */
`;

const Body = styled.div`
  width: 100%;
  height: calc(100% - 70px); /* Ajustar a altura para considerar o Header */
  overflow-y: auto; /* Habilitar a rolagem vertical */
  padding: 1rem;
`;

const ButtonClose = styled.button`
  height: 100%;
  border: none;
  background: none;
  display: flex;
    align-items: center;
    justify-content: flex-end;
  cursor: pointer;
`;

const CheckoutButton = styled.button`
  padding: 1rem 2rem;
  width: 90%;
  background-color: green;
  color: white;
  border: 1px solid green;
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:disabled {
    background-color: #ccc;
    color: black;
    border-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #008000c1;
    border-color: 008000c1;
    color: white;
  }
`;
const Footer = styled.div`
  width: 100%;
  padding: 1rem;
  background: white; // Cor de fundo do rodapé
  box-shadow: 0px -2px 4px rgba(0,0,0,0.1); // Sombra para destacar o rodapé
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center; // Centralizar o botão no rodapé
`;
// Componente do carrinho de compras
const ShoppingCart = ({ opened, cartClose, cartItems, removeCart, comprar, compraRealizada }) => {
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Limpeza ao desmontar
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opened]);

  const handleCartClick = (e) => {
    e.stopPropagation();
  };
  return (
    <OffsideWrapper isOpen={opened} onClick={(e) => cartClose()}>
      <CartContainer onClick={handleCartClick}>
        <Header>
          <h1>Carrinho de compras</h1>
          <ButtonClose onClick={(e) => cartClose()}>
            <FaX size={'1.4rem'} />
          </ButtonClose>
        </Header>
        <Body>
          {/* Listagem de produtos no carrinho */}
          {cartItems.map((item, index) => (
            <CartItem key={`${item.id}-${index}`} item={item} removeFromCart={removeCart} />
          ))}
        </Body>
        {cartItems.length > 0 && (
          <Footer>
            <CheckoutButton onClick={(e) => comprar()} disabled={compraRealizada}>
              {compraRealizada ? "Compra Já realizada" : "Finalizar compra"}
            </CheckoutButton>
          </Footer>
        )}
      </CartContainer>
    </OffsideWrapper>
  );
};

export default ShoppingCart;
