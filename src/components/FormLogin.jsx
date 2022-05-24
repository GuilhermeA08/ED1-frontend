import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Stack, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, useToast } from '@chakra-ui/react';

import { Context } from '../contexts/AuthContext';

const initialuser = {
   email: '',
   password: ''
}

export default function Login() {
   const router = useRouter();

   const [user, setUser] = useState(initialuser);
   const [isErrorEmail, setErrorEmail] = useState(false);
   const [isErrorPassword, setErrorPassword] = useState(false);
   const toast = useToast();

   const { handleAuthenticate, userAuth, loading } = useContext(Context);

   useEffect(() => {
      if(userAuth.token != null){
         router.push('/');
      }
   }, [loading]);

   async function handleLogin() {
      user.email === '' && setErrorEmail(true);
      user.password === '' && setErrorPassword(true);

      await handleAuthenticate(user, toast);
   }

   return (
      <Stack margin="10" spacing="5">
         <Heading color="#43A6BC" align="center">Login</Heading>

         <FormControl isInvalid={isErrorEmail} align="center">
            <FormLabel htmlFor='email'>E-mail</FormLabel>
            <Input
               id='email'
               type='email'
               value={user.email}
               onChange={(e) => {
                  setUser(prevState => {
                     return { ...prevState, email: e.target.value }
                  });
                  setErrorEmail(false);
               }}
            />
            {isErrorEmail && (<FormErrorMessage>O e-mail é obrigatório</FormErrorMessage>)}
         </FormControl>

         <FormControl isInvalid={isErrorPassword} align="center">
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <Input
               id='password'
               type='password'
               value={user.password}
               onChange={(e) => {
                  setUser(prevState => {
                     return { ...prevState, password: e.target.value }
                  });
                  setErrorPassword(false);
               }}
            />
            {isErrorPassword && (<FormErrorMessage>A senha é obrigatória</FormErrorMessage>)}
         </FormControl>

         <Button isLoading={false} backgroundColor="#B2DDE6" onClick={handleLogin}>Entrar</Button>
      </Stack>
   );
}