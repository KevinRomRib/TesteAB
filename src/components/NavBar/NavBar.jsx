import React from "react";
import { Field } from "../Field/Field";
import { Text } from "../Text/Text";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({ tipo, Cart }) => {
   return (
      <Field
         width="100%"
         height="70px"
         backgroundColor={tipo === 'masculino' ? "#2e1915" : tipo === 'feminino' ? "#b9a08c" : "none"}
         boxShadow="4px 4px 6px rgba(0, 0, 0, 0.3)"
         display={tipo === 'masculino' ? "flex" : tipo === 'feminino' ? "flex" : "none"}
         alignItems="center"
         justifyContent="space-around"
      >
         <Text
            fontSize="25px"
            color="white"
         >
            Fashion Store
         </Text>
         <Text
            fontSize="25px"
            color="white"
            cursor="pointer"
         >
            <FaCartShopping onClick={(e) => Cart()} />
         </Text>
      </Field>
   );
};

export default Navbar;
