import { Flex, Stack, Image, Button, Box } from '@chakra-ui/react';

import Link from '../components/Link';

import articleLogo from '../public/article-logo.svg';
import userPhoto from '../public/user-photo.svg';

export default function MenuBar() {
   const userAuth = true;

   return (
      <Flex 
         backgroundColor='#43A6BC' 
         justify="space-between"
         minHeight={14}
         fontWeight={900}
      >
         <Stack justify='center'>
            <Image 
               src={articleLogo.src} 
               width='50%'
               ml={5}
            />
         </Stack>

         <Stack 
            direction='row' 
            spacing={10} 
            align='center'
         >
            <Link href='/' color='#fff'>Inicio</Link>
            <Link href='/about' color='#fff'>Sobre</Link>
            <Link href='/categories' color='#fff'>Categorias</Link>
         </Stack>

      {
         userAuth ?
         (
            <Stack 
               direction='row' 
               spacing={10}
               align='center'
               mr={5}
            >
               <Link href='/create' color='#fff'>Criar</Link>

               <Box 
                  backgroundColor='#fff'
                  padding={2}
                  borderRadius={20}
               >
                  <Image
                     src={userPhoto.src}
                     width={6}
                     onClick={()=> console.log("clicou")}
                  />
               </Box>
            </Stack>
         )
         :
         (
            <Stack 
               direction='row' 
               spacing={10}
               align='center'
               mr={5}
            >
               <Link 
                  href='/login' 
               >
                  <Button
                     backgroundColor='#fff'
                     padding={2}
                     width={100}
                     borderRadius={20}
                  >
                     Entrar
                  </Button>
               </Link>
               <Link href='/register' color='#fff'>Cadastre-se</Link>
            </Stack>
         )
      }
      </Flex>
   );
}