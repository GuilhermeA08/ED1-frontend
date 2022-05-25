import axios from "../config/axios";

export async function createArticle(article) {
   await axios.post("/articles", article).then(response => {
      console.log(response);
   }).catch(error => {
      console.log(error);
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