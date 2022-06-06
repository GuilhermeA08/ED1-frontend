import axios from "../config/axios";

export async function userRegister(user) {
   return await axios.post('/users', user).then((response) => {
      console.log(response);
      return response;
   }).catch((error) => {
      return error.response;
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