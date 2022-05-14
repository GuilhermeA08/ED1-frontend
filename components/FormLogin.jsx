import { useState } from 'react';
import { Stack, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

const initialuser = {
   email: '',
   password: ''
}

export default function Login() {
   const [user, setUser] = useState(initialuser);
   const [isErrorEmail, setErrorEmail] = useState(false);
   const [isErrorPassword, setErrorPassword] = useState(false);

   function handleLoginUser() {
      user.email === '' && setErrorEmail(true);
      user.password === '' && setErrorPassword(true)

      console.log(user);
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

         <Button isLoading={false} backgroundColor="#B2DDE6" onClick={handleLoginUser}>Entrar</Button>
      </Stack>
   );
}