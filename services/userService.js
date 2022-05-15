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