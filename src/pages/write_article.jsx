import { useContext, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Stack, FormControl, FormLabel, Input, Textarea, Button, FormErrorMessage, Box, Flex, useToast } from "@chakra-ui/react";
import FilePicker from "chakra-ui-file-picker";

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
   const router = useRouter();
   const toast = useToast();

   const attachmentRef = useRef();
   const [rows, setRows] = useState(2);
   const [article, setArticle] = useState(initialArticle);
   const [isErrorTitle, setErrorTitle] = useState(false);
   const [isErrorContents, setErrorContents] = useState(false);

   async function handleCreateArticle() {
      article.title === '' && setErrorTitle(true);
      article.contents === '' && setErrorContents(true);

      const userId = { id: userAuth.id };

      setArticle(prevState => {
         return { ...prevState, user: userId }
      });

      const response = await createArticle({ ...article, user: userId }, attachmentRef);

      if (response.status == 201) {
         router.push(`/article?id=${response.data.id}`)
      } else {
         toast({
            title: 'Error',
            description: response.data.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top'
         });
         router.push('/login');
      }
   }

   return (
      <Flex align="center" justify="center" p={20}>
         <Box
            boxShadow='lg'
            borderWidth='1px'
            borderRadius='20'
            backgroundColor="#FFF"
            padding='8'
            w='800px'
         >
            <Stack
               direction='column'
               margin={10}
               spacing={10}
               align="center"
            >
               <FormControl isInvalid={isErrorTitle} align="center">
                  <FormLabel
                     htmlFor='title'
                     color="#43A6BC"
                     fontWeight={900}
                  >
                     Título
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
                     Categorias
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

            <Stack
               margin={10}
               spacing={20}
               align="center"
            >
               <FormControl isInvalid={isErrorContents} align="center">
                  <FormLabel
                     htmlFor='contents'
                     color="#43A6BC"
                     fontWeight={900}
                  >
                     Artigo
                  </FormLabel>

                  <Textarea
                     id='title'
                     type='text'
                     backgroundColor='#FFF'
                     resize="none"
                     overflow="hidden"
                     p={5}
                     textAlign="justify"
                     style={{ textIndent: "50px" }}
                     rows={rows}
                     value={article.contents}
                     onChange={(e) => {
                        setArticle(prevState => {
                           return { ...prevState, contents: e.target.value }
                        });

                        if (e.target.value != "") {
                           setErrorContents(false);
                        }
                     }}
                     onInput={(e) => {
                        if (e.target.scrollHeight > e.target.offsetHeight) {
                           setRows(prevState => {
                              return prevState + 1;
                           })
                        };
                     }}
                  />
                  {isErrorContents && (<FormErrorMessage>Contents is required</FormErrorMessage>)}
               </FormControl>


               <FormControl align="center">
                  <FormLabel
                     htmlFor='contents'
                     color="#43A6BC"
                     fontWeight={900}
                  >
                     Anexo
                  </FormLabel>

                  <FilePicker
                     onFileChange={(file) => { console.log(attachmentRef) }}
                     placeholder="Anexo"
                     clearButtonLabel="Remover"
                     multipleFiles={false}
                     accept="*"
                     hideClearButton={false}
                     inputProps={{ cursor: "pointer" }}
                     ref={attachmentRef}
                  />
               </FormControl>

               <Button
                  isLoading={false}
                  backgroundColor="#B2DDE6"
                  width="40%"
                  onClick={handleCreateArticle}
               >
                  Publicar
               </Button>
            </Stack>
         </Box>
      </Flex>
   );

}