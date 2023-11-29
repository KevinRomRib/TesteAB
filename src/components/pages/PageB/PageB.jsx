import styled from "styled-components";
import { Field } from "../../Field/Field";
import { Text } from "../../Text/Text";

import Products from "../../../models/products"
import BannerPageB from "../../../imgs/BannerMulher.png"


import { formatCurrency } from "../../../utils/currency"
import { toast } from "react-toastify";

const Button = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b9a08c;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: ${(props) => props.width};
`;

function PageB() {

  const handlePurchase = () => {
    toast("Comprado com sucesso!", {type: 'success'})
  }
  
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
          width="50%"
          src={BannerPageB} 
        />
        <Field
          width="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          paddingTop="30px"
          gap="50px"
        >
          {Products.map((item, index) => (
            <Field
              width="450px"
              display="flex"
              alignItems="flex-start"
              flexDirection="column"
              gap="10px"
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

 export default PageB;
 