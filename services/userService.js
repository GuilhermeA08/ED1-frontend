import axios from "../config/axios";

export async function userRegister(user, toast) {
   await axios.post('/users', user).then((response) => {
      console.log(response);
   }).catch((error) => {
      console.log(error);
      toast({
         title: 'Error',
         description: error.response.data.message,
         status: 'error',
         duration: 9000,
         isClosable: true,
         position: 'top'
       })
   });
}

export async function login(user, toast) {
   return await axios.get('/users').then((response) => {
      const users = response.data;
      let userAuth = null;

      users.forEach((userDB) => {
         if(userDB.email == user.email) {
            userAuth = userDB;
         }
      });
    
      if(userAuth) {
         return userAuth;

      }else{
         toast({
            title: 'Error',
            description: 'Incorrect email or password',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top'
          })
      }
   });
}