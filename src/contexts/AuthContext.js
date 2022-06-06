import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "../config/axios";
import jwt from "jsonwebtoken";

import { login } from "../services/userService";

const Context = createContext();

function AuthProvider({ children }) {
   const router = useRouter();
   const [userAuth, setUserAuth] = useState({});
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // Busca o usuário no local storage
      const user = localStorage.getItem('user');

      // Verifica se existe o usuário no localStorage
      if (user) {
         // pega o token do usuário
         const jwtToken = JSON.parse(user).token;
         let jwtDecoded = jwt.decode(jwtToken);

         // Verifica se o token ta expirado
         if (new Date() > new Date(jwtDecoded.exp * 1000)) {
            localStorage.removeItem('user');
            axios.defaults.headers.Authorization = undefined;
            setUserAuth({});

            router.push('/login');
         } else {
            axios.defaults.headers.Authorization = `Bearer ${jwtToken}`;
            setUserAuth(JSON.parse(user));
         }
      }

      setLoading(false);
   }, []);

   async function handleAuthenticate(user, toast) {
      // Faz o login
      const { status, data } = await login(user);

      if (status != 200) {
         toast({
            title: 'Error',
            description: data.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top'
         });
      }

      // Verifica se fez o login corretamente
      if (status == 200) {
         setUserAuth(data);

         console.log("Context:")
         console.log(data);

         // Seta o token para todas as requisições
         axios.defaults.headers.Authorization = `Bearer ${data.token}`;

         // Guarda o objeto junto com o token no localStorage
         localStorage.setItem('user', JSON.stringify(data));

         router.push('/');
      }
   }

   function handleLogout() {
      setUserAuth({});
      localStorage.removeItem('user');
      axios.defaults.headers.Authorization = undefined;
      router.push('/');
   }

   return (
      <Context.Provider value={{
         loading,
         userAuth,
         setUserAuth,
         handleAuthenticate,
         handleLogout
      }}>
         {children}
      </Context.Provider>
   );
}

export { Context, AuthProvider };
