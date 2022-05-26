import axios from "../config/axios";

export async function createArticle(article) {
   return await axios.post("/articles", article).then(response => {
      console.log(response);
      return response;
   }).catch(error => {
      console.log(error);
      return error.response;
   });
}

export async function findAllArticles() {
   return await axios.get("/articles").then(response => {
      return response;
   }).catch(error => {
      return error.response;
   });
}

export async function findArticlesById(id) {
   return await axios.get("/articles/" + id).then(response => {
      return response;
   }).catch(error => {
      return error.response;
   });
}