import { Field } from "../Field/Field";
import { Text } from "../Text/Text";
import { FaCartShopping } from "react-icons/fa6";

function NavBar(tipo) {
   return (
     <Field
      width="100%"
      height="70px"
      backgroundColor={tipo.tipo === 'homem' ? "#2e1915" : tipo.tipo === 'mulher' ? "#b9a08c" : null}
      boxShadow="4px 4px 6px rgba(0, 0, 0, 0.3)"
      display="flex"
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
         <FaCartShopping/>
      </Text>
     </Field>
   );
 }
  
 export default NavBar;
 