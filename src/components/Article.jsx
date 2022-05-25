import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HStack, Stack, Heading, Box, Text, Link , useToast} from '@chakra-ui/react';
import { BiLike, BiDislike } from "react-icons/bi";
import { FiFlag } from "react-icons/fi";

import { findArticlesById } from "../services/articleService";

export default function Article() {
   const router = useRouter();
   const query = router.query;
   const toast = useToast();

   const [data, setData] = useState({});

   useEffect(() => {
      (async () => {
         if (query.id != null) {
            const articlesResponse = await findArticlesById(query.id);

            if(articlesResponse.status == 200) {
               setData(articlesResponse.data);
            }else{
               toast({
                  title: 'Error',
                  description: articlesResponse.data.message,
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                  position: 'top'
               });
            }
         }
      })();
   }, [query]);

   return (
      <Stack>
         <Box key={data.id} boxShadow='lg' borderWidth='1px' borderRadius='20' backgroundColor="#FFF" padding='8' maxWidth='1000px' minWidth='500px'>
            <HStack justify='space-between' paddingBottom={2}>
               <Heading>
                  {data.title}
               </Heading>
               <Text paddingTop='5'>Publicado em:&nbsp;
                  {new Intl.DateTimeFormat('en-US', {
                     day: '2-digit',
                     month: '2-digit',
                     year: 'numeric'
                  }
                  ).format(data.createdAt)}
               </Text>
            </HStack>
            <HStack justify="space-between">
               <Text>Autor: {data.user != null && data.user.name}</Text>

               <HStack spacing={3}>
                  <Link href="#" ><BiLike size={25} /></Link>
                  <Text>{data.likes}</Text>
                  <Link href="#"><BiDislike size={25} /></Link>
                  <Text>{data.dislikes}</Text>
                  <Link href="#"><FiFlag size={25} /></Link>
               </HStack>
            </HStack>
            <Text align="justify" padding={14}>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.contents}
            </Text>
         </Box>
      </Stack>
   );
}