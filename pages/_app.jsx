import { createContext, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import theme from "../styles/theme";
import MenuBar from "../components/MenuBar";

import {UserContext} from "../contexts/userContext";

const initialUser = {
   id: 0,
   createdAt: null,
   updatedAt: null,
   name: "",
   email: "",
   articles: []
}

function MyApp({ Component, pageProps }) {
   const [userAuth, setUserAuth] = useState(initialUser);

   return (
      <ChakraProvider theme={theme} >
         <Flex 
         direction="column" 
         height="100vh" 
         width="100%"
      >
         <UserContext.Provider value={{userAuth, setUserAuth}}>
            <MenuBar />
            <Component {...pageProps} />
         </UserContext.Provider>
      </Flex>
         
      </ChakraProvider>
   );
}

export default MyApp;
