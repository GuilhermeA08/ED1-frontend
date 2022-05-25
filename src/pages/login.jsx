import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex } from '@chakra-ui/react';
import jwt from 'jsonwebtoken';

import { Context } from '../contexts/AuthContext';
import FormLogin from '../components/FormLogin';

export default function Register() {
   const router = useRouter();
   const { userAuth, loading } = useContext(Context);

   useEffect(() => {
      if(userAuth.token != null){
         const tokenDecoded = jwt.decode(userAuth.token);
         
         if(new Date() < new Date(tokenDecoded.exp)){
            router.push('/');
         }
      }
   }, [loading]);

   return (
      <Flex align="center" justify="center" height="100vh">
         <Box borderWidth='1px' borderRadius='20' backgroundColor="#FFF" padding='4'>
            <FormLogin />
         </Box>
      </Flex>
   );
}