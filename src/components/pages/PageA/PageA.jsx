import styled from "styled-components";
import { Field } from "../../Field/Field";
import { Text } from "../../Text/Text";

import BannerPageA from "../../../imgs/BannerHomem.png"

import Products from "../../../models/products"

import { formatCurrency } from "../../../utils/currency"
import { toast } from "react-toastify";
import compraService from "../../../services/compra";
import { useEffect } from "react";

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

function PageA({ user }) {

  const handlePurchase = async () => {
    try {
      const compra = await compraService.cadastrar({ idUsuario: user.id, page: 'a' })
      if (compra.status === 200) {
        toast("Comprado com sucesso!", { type: 'success' })
      }
    } catch (error) {
      toast("Erro ao comprar!", { type: 'error' })
    }
  }

  // const acesso = async (userr) => {
  //   try {
  //     const acesso = await compraService.acesso({ idUsuario: userr.id, page: 'a' })
  //     if (acesso.status === 200) {
  //       console.log(acesso.data)
  //     } else {
  //       console.log(acesso)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   acesso(user)
  // }, [])

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

export default PageA;
