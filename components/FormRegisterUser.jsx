import { useState } from 'react';
import { Stack, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

const initialuser = {
   name: '',
   email: '',
   password: '',
}

export default function FormRegisterUser() {
   const [user, setUser] = useState(initialuser);
   const [isErrorName, setErrorName] = useState(false);
   const [isErrorEmail, setErrorEmail] = useState(false);
   const [isErrorPassword, setErrorPassword] = useState(false);

   function handleRegisterUser() {
      user.name === '' && setErrorName(true);
      user.email === '' && setErrorEmail(true);
      user.password === '' && setErrorPassword(true)

      console.log(user);
   }

   return (
      <Stack margin="10" spacing="5">
         <Heading color="#43A6BC">Cadastro de usuários</Heading>

         <FormControl isInvalid={isErrorName} align="center">
            <FormLabel htmlFor='name'>Nome</FormLabel>
            <Input
               id='name'
               type='name'
               value={user.name}
               onChange={(e) => {
                  setUser(prevState => {
                     return { ...prevState, name: e.target.value }
                  });
                  setErrorName(false);
               }}
            />
            {isErrorName && (<FormErrorMessage>O nome é obrigatório</FormErrorMessage>)}
         </FormControl>

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

         <Button isLoading={false} backgroundColor="#B2DDE6" onClick={handleRegisterUser}>Cadastrar</Button>
      </Stack>
   );
}