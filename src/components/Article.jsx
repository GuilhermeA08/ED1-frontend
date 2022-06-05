import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HStack, Stack, Heading, Box, Text, Link, useToast, VStack } from '@chakra-ui/react';
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

            if (articlesResponse.status == 200) {
               setData(articlesResponse.data);
            } else {
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

   async function handleDownloadAttachment(url) {
      fetch(url)
         .then(response => response.blob())
         .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "anexo";
            link.click();
      }).catch(console.error);
   }

   return (
      <Stack>
         <Box
            key={data.id}
            boxShadow='lg'
            borderWidth='1px'
            borderRadius='20'
            backgroundColor="#FFF"
            padding='8'
            maxWidth='1000px'
            minWidth='500px'
         >
            <HStack justify='space-between'>
               <Heading>
                  {data.title}
               </Heading>
            </HStack>

            <HStack justify="space-between" mt={5}>
               <VStack align="flex-start">
                  <Text>Autor: {data.user != null && data.user.name}</Text>

                  <Text minWidth='20%'>
                     Publicado em:&nbsp;
                     {new Intl.DateTimeFormat('en-US', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                     }
                     ).format(data.createdAt)}
                  </Text>

                  {
                     data.attachment != null &&
                     (
                        <Text>
                           Anexo: <Link onClick={() => handleDownloadAttachment(data.attachment.downloadUri)} >arquivo.{data.attachment.type}</Link>
                        </Text>
                     )
                  }
               </VStack>

               <HStack spacing={3}>
                  <Link href="#" ><BiLike size={25} /></Link>
                  <Text>{data.likes}</Text>
                  <Link href="#"><BiDislike size={25} /></Link>
                  <Text>{data.dislikes}</Text>
                  <Link href="#"><FiFlag size={25} /></Link>
               </HStack>
            </HStack>

            <Stack p={10}>
               {data.contents != null && data.contents.split("\n").map((paragraph, index) => {
                  return (
                     <Text
                        key={index}
                        textAlign="justify"
                        style={{ textIndent: '50px' }}
                     >
                        {paragraph}
                     </Text>
                  );
               })}
            </Stack>
         </Box>
      </Stack>
   );
}