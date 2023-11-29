import { Field } from "../Field/Field";
import { Text } from "../Text/Text";
import { FaCartShopping } from "react-icons/fa6";

function NavBar() {
   return (
     <Field
      width="100%"
      height="70px"
      backgroundColor="#0089ED"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
     >
      <Text
         fontSize="25px"
         fontFamily="arial"
         color="white"
      >
         Nome da Loja
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
 