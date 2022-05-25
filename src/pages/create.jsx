import { useContext, useState } from "react";
import { Stack, FormControl, FormLabel, Input, Textarea, Button, FormErrorMessage } from "@chakra-ui/react";

import { Context } from "../contexts/AuthContext";
import { createArticle } from "../services/articleService";

const initialArticle = {
   title: '',
   contents: '',
   user: {
      id: 0
   }
}

export default function Create() {
   const { userAuth } = useContext(Context);
   const [article, setArticle] = useState(initialArticle);
   const [isErrorTitle, setErrorTitle] = useState(false);
   const [isErrorContents, setErrorContents] = useState(false);

   async function handleCreateArticle(){
      article.title === '' && setErrorTitle(true);
      article.contents === '' && setErrorContents(true);

      const userId = {id: userAuth.id}

      setArticle(prevState => {
         return { ...prevState, user: userId} 
      });

      console.log(article);

      await createArticle(article);
   }

   return (
      <>
         <Stack direction='row' margin={10} spacing={20} align="center">
            <FormControl isInvalid={isErrorTitle} align="center">
               <FormLabel
                  htmlFor='title'
                  color="#43A6BC"
                  fontWeight={900}
               >
                  Title
               </FormLabel>

               <Input
                  id='title'
                  type='text'
                  backgroundColor='#FFF'
                  value={article.title}
                  onChange={(e) => {
                     setArticle(prevState => {
                        return { ...prevState, title: e.target.value }
                     });
                     setErrorTitle(false);
                  }}
               />
               {isErrorTitle && (<FormErrorMessage>Title is required</FormErrorMessage>)}
            </FormControl>

            <FormControl isInvalid={isErrorTitle} align="center">
               <FormLabel
                  htmlFor='title'
                  color="#43A6BC"
                  fontWeight={900}
                  disabled
               >
                  Category
               </FormLabel>

               <Input
                  id='title'
                  type='text'
                  backgroundColor='#FFF'
                  value={article.category}
                  onChange={(e) => {
                     setArticle(prevState => {
                        return { ...prevState, category: e.target.value }
                     });
                     setErrorTitle(false);
                  }}
                  disabled
               />
               {isErrorTitle && (<FormErrorMessage>Category is required</FormErrorMessage>)}
            </FormControl>
         </Stack>

         <Stack margin={10} spacing={20} align="center">
            <FormControl isInvalid={isErrorContents} align="center">
               <FormLabel
                  htmlFor='contents'
                  color="#43A6BC"
                  fontWeight={900}
               >
                  Article
               </FormLabel>

               <Textarea
                  id='title'
                  type='text'
                  backgroundColor='#FFF'
                  height={400}
                  value={article.contents}
                  onChange={(e) => {
                     setArticle(prevState => {
                        return { ...prevState, contents: e.target.value }
                     });
                     setErrorContents(false);
                  }}
               />
               {isErrorContents && (<FormErrorMessage>Contents is required</FormErrorMessage>)}
            </FormControl>

            <Button 
               isLoading={false} 
               backgroundColor="#B2DDE6"
               width="40%"
               onClick={handleCreateArticle}
            >
               Criar
            </Button>
         </Stack>
      </>
   );

}