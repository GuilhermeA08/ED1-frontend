import { ChakraProvider, Flex } from "@chakra-ui/react";

import theme from "../styles/theme";
import MenuBar from "../components/MenuBar";

function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider theme={theme} >
         <Flex 
         direction="column" 
         height="100vh" 
         width="100%"
      >
         <MenuBar />
         <Component {...pageProps} />
      </Flex>
         
      </ChakraProvider>
   );
}

export default MyApp;
