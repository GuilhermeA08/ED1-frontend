import { Box, Flex, Center, Text, Stack, Image, Spacer } from '@chakra-ui/react';

export default function about() {
    return (
        <Flex
            align="center"
            justify="center"
            flexDirection='column'
        >
            <Box
                borderWidth='1px'
                padding='2'
                bgGradient='linear(to-r, #43A6BC, #B2DDE6)'
                opacity='80%'
                width='100%'
                align='center'
                color='#ffffff'
            >
                <Text fontSize='4xl'>arTIcle</Text>
                <Text fontSize='2xl'>
                    Somos uma plataforma de criação de artigos voltados para a área de tecnologia
                    da informação, onde VOCÊ é livre para compartilhar seu conhecimento.
                </Text>
            </Box>

            <Box padding='2' align='center' margin='20px' width='100%'>
                <Text
                    fontSize='3xl'
                    margin='20px'
                >
                    Colaboradores
                </Text>
                <Flex>
                    <Spacer />
                    <Box>
                        <Image
                            borderRadius='full'
                            boxSize='120px'
                            src='edphoto.png'
                            alt='colaborador 1'
                        ></Image>
                    </Box>
                    <Spacer />
                    <Box>
                        <Image
                            borderRadius='full'
                            boxSize='120px'
                            src='gaphoto.png'
                            alt='colaborador 2'
                        ></Image>
                    </Box>
                    <Spacer />
                    <Box>
                        <Image
                            borderRadius='full'
                            boxSize='120px'
                            src='paphoto.png'
                            alt='colaborador 3'
                        ></Image>
                    </Box>
                    <Spacer />
                    <Box>
                        <Image
                            borderRadius='full'
                            boxSize='120px'
                            src='ryphoto.png'
                            alt='colaborador 4'
                        ></Image>
                    </Box>
                    <Spacer />
                </Flex>
            </Box>
        </Flex>
    );
}