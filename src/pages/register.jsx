import { Box, Flex, Center } from '@chakra-ui/react';

import FormRegisterUser from '../components/FormRegisterUser';

export default function Register() {
   return (
      <Flex
         align="center"
         justify="center"
         flex={1}
      >
         <Box
            borderWidth='1px'
            borderRadius='20'
            backgroundColor="#FFF"
            padding='4'
         >
            <FormRegisterUser />
         </Box>
      </Flex>
   );
}