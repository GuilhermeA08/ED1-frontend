import { useContext } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import theme from "../styles/theme";
import MenuBar from "../components/MenuBar";

import { AuthProvider, Context } from "../contexts/AuthContext";

// const initialUser = {
//    id: 0,
//    createdAt: null,
//    updatedAt: null,
//    name: "",
//    email: "",
//    articles: []
// }

function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider theme={theme} >
         <Flex 
         direction="column" 
         height="100vh" 
         width="100%"
      >
         <AuthProvider>
            <MenuBar />
            <Component {...pageProps} />
         </AuthProvider>
      </Flex>
         
      </ChakraProvider>
   );
}

export default MyApp;
