import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Stack, Heading, Box, Text, Flex } from '@chakra-ui/react';
import Link from "./Link";

import { useRouter } from 'next/router'

const url = "http://localhost:8080/api/v1/articles/"

export default function Card() {
   const router = useRouter();
   const [articles, setArticles] = useState([]);

   useEffect(() => {
      axios.get(url)
         .then(res => {
            setArticles(res.data)
         }).catch(err => console.error(err))
   }, []);

   function handleOpenArticle(item){
      router.push(`/article?id=${item.id}`)
   }

   return (
      <Stack spacing="5">
         {articles.map((item) =>
            <Flex onClick={() => handleOpenArticle(item)}>
               <Box key={item.id} boxShadow='lg' borderWidth='1px' borderRadius='20' backgroundColor="#FFF" padding='8' w='800px'>
                  <Heading as='h3' size='lg' align="center" paddingBottom={5}>
                     <Link href={{ pathname: "/article", query: { id: item.id } }}>
                        {item.attachment}
                     </Link>
                  </Heading>
                  <Text>
                     {item.contents}
                  </Text>
                  <Text align="end" paddingTop='5' color="gray">
                     {new Intl.DateTimeFormat('en-US', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                     }
                     ).format(item.createdAt)}
                  </Text>

               </Box>
            </Flex>
         )}
      </Stack>
   );
}
