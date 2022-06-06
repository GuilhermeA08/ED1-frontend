import { useContext } from 'react';
import { Flex, Stack, Image, Button, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import Link from './Link';

import articleLogo from '../../public/article-logo.svg';
import userPhoto from '../../public/user-photo.svg';
import logoutIcon from "../../public/logout.svg";

import { Context } from '../contexts/AuthContext';

export default function MenuBar() {
   const { userAuth, handleLogout } = useContext(Context);

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
            {/* <Link href='/categories' color='#fff'>Categorias</Link> */}
         </Stack>

         {
            userAuth.token != null ?
               (
                  <Stack
                     direction='row'
                     spacing={10}
                     align='center'
                     mr={5}
                  >
                     <Link href='/write_article' color='#fff'>Criar</Link>

                     <Menu width='100px'>
                        <MenuButton
                           backgroundColor='#fff'
                           padding={2}
                           borderRadius='full'
                        >
                           <Image
                              src={userPhoto.src}
                              width={6}
                           />
                        </MenuButton>

                        <MenuList minWidth='100%'>
                           <MenuItem
                              minH='30px'
                              onClick={handleLogout}
                           >
                              <Image
                                 src={logoutIcon.src}
                                 width={5}
                                 pr={2}
                              />
                              Sair
                           </MenuItem>
                        </MenuList>
                     </Menu>

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