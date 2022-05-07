import { Box, Flex, Heading } from '@chakra-ui/react';

import FormRegisterUser from '../components/FormRegisterUser';

export default function Register() {
   return (
      <>
         <Flex align="center" justify="center" height="100vh">
            <Box borderWidth='1px' borderRadius='20' backgroundColor="#FFF" padding='4'>
               <FormRegisterUser />
            </Box>
         </Flex>
      </>
   );
}