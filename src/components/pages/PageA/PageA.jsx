import styled from "styled-components";
import { Field } from "../../Field/Field";
import { Text } from "../../Text/Text";

import BannerPageA from "../../../imgs/BannerHomem.png"

import Products from "../../../models/products"

import { formatCurrency } from "../../../utils/currency"
import { toast } from "react-toastify";
import compraService from "../../../services/compra";


import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore/lite';
import { useEffect } from "react";

import { db } from "../../../config/googlefirebaseConfig";




const Button = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e1915;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: ${(props) => props.width};
`;

export default function PageA() {
  const comprasCollectionRef = collection(db, "comprasAB")
  const visitorCollectionRef = doc(db, 'visitorsAB', 'pagH')

  const handlePurchase = async() => {
    let data_atual = new Date
    let tipo_pagina = localStorage.getItem('ultimaPagina')


    await addDoc(comprasCollectionRef,
      {
        id_produto: '1',
        tipo_pagina: tipo_pagina,
        data: data_atual
      })
    toast("Comprado com sucesso!", {type: 'success'})
  }
  
  

  const addVisitante = async () => {
    let visitantes_atual = await getDoc(visitorCollectionRef)
    let visitantes_tratados = visitantes_atual.data()
    let total_atualizado = visitantes_tratados['númeroVisitantes'] + 1

    await updateDoc(visitorCollectionRef, {númeroVisitantes : total_atualizado})
  }


  useEffect(() => {
      addVisitante()

  }, [])
  
   return (
     <Field
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      paddingTop="50px"
      paddingBottom="50px"
    >
      <Image
        width="90%"
        src={BannerPageA}
      />
      <Field
        width="90%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        paddingTop="30px"
        gap="30px"
      >
        {Products.map((item, index) => (
          <Field
            width="450px"
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            gap="1px"
            key={index}
          >
            <Image
              width="450px"
              src={item.image}
            />
            <Field
              width="450px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="25px"
                fontFamily="arial"
                fontWeight="bold"
                color="black"
              >
                {item.name}
              </Text>
              <Text
                fontSize="15px"
                fontFamily="arial"
                fontWeight="bold"
                color="green"
              >
                {formatCurrency(item.price)}
                </Text>
            </Field>
            <Button
              onClick={handlePurchase}
            >
              Comprar
            </Button>
          </Field>
        ))}
      </Field>
    </Field>
  );
}

