import axios from "../config/axios";

export async function createArticle(article) {
   await axios.post("/articles", article).then(response => {
     console.log(response); 
   }).catch(error => {
      console.log(error);
   })
}