import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HStack, Stack, Heading, Box, Text, Link } from '@chakra-ui/react';
import { BiLike, BiDislike } from "react-icons/bi";
import { FiFlag } from "react-icons/fi";

const url = "http://localhost:8080/api/v1/articles/"

export default function Article() {

    const router = useRouter();
    const query = router.query;
    const [data, setData] = useState({
        attachment: "",
        contents: "",
        dislikes: "",
        likes: ""
    });

    useEffect(() => {
        axios.get(url + query.id)
        .then(res=>{
            setData(res.data)
        }).catch(err=>console.error(err))
    }, [query]
    );

    return (
        <Stack>
            <Box key={data.id} boxShadow='lg' borderWidth='1px' borderRadius='20' backgroundColor="#FFF" padding='8' w='800px'>
                <HStack spacing='500px' paddingBottom={2}>
                    <Heading as='h3' size='lg'>
                        {data.attachment}
                    </Heading>
                    <Text paddingTop='5'>Data:&nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            day: '2-digit', 
                            month: '2-digit', 
                            year: 'numeric'
                            }
                        ).format(data.createdAt)}
                    </Text>
                </HStack>
                <HStack>
                    <Text paddingRight={580}>Autor:</Text>
                    <Link><BiLike/></Link>
                    <Text>{data.likes}</Text>
                    <Link><BiDislike/></Link>
                    <Text>{data.dislikes}</Text>
                    <Link><FiFlag/></Link>
                </HStack>
                <Text  align="justify" padding={14}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.contents}
                    &nbsp;{data.contents}
                    &nbsp;{data.contents}
                    &nbsp;{data.contents}
                    &nbsp;{data.contents}
                    <br/><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.contents}
                    &nbsp;{data.contents}
                    &nbsp;{data.contents}
                    &nbsp;{data.contents}
                    &nbsp;{data.contents}
                    <br/><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.contents}
                    &nbsp;{data.contents}
                    &nbsp;{data.contents}
                    &nbsp;{data.contents}
                    &nbsp;{data.contents}
                </Text>
            </Box>
        </Stack>
    );
}