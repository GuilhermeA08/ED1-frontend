import { Box, Flex } from '@chakra-ui/react';

import FormLogin from '../components/FormLogin';

export default function Register() {
   return (
      <Flex align="center" justify="center" height="100vh">
         <Box borderWidth='1px' borderRadius='20' backgroundColor="#FFF" padding='4'>
            <FormLogin />
         </Box>
      </Flex>
   );
}