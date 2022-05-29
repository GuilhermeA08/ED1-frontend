import axios from "../config/axios";

export async function userRegister(user, toast) {
   await axios.post('/users', user).then((response) => {
   }).catch((error) => {
      toast({
         title: 'Error',
         description: error.response.data.message,
         status: 'error',
         duration: 9000,
         isClosable: true,
         position: 'top'
      });
   });
}

export async function login(user) {
   return await axios.post('/login', user).then(response => {
      return response;
   }).catch(error => {
      return error.response;
   });
}

export async function findUserById(id) {
   return await axios.get('/users/' + id).then(response => {
      return response;
   }).catch(error => {
      return error.response;
   })
}