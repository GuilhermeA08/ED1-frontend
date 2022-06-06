import axios from "../config/axios";
import FormData from "form-data";

export async function createArticle(article, attachment) {
   const form = new FormData();

   if (attachment.current.state.files != null) {
      form.append("attachment", attachment.current.state.files[0]);
   }

   form.append("article", JSON.stringify(article));

   return await axios.post("/articles", form, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {
      return response;
   }).catch(error => {
      return error.response;
   });
}

export async function updateArticle(article, attachment) {
   const form = new FormData();

   if (attachment.current.state.files != null) {
      form.append("attachment", attachment.current.state.files[0]);
   }

   form.append("article", JSON.stringify(article));

   return await axios.put("/articles/" + article.id, form, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {
      return response;
   }).catch(error => {
      return error.response;
   })
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

export async function downloadAttachment(url) {
   return await axios.get(url, { headers: { 'Content-Disposition': 'attachment' } }).then(response => {
      return response;
   }).catch(error => {
      return error.response;
   })
}