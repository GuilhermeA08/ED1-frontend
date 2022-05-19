import { Flex } from '@chakra-ui/react';

import Article from '../components/Article';

export default function ArticlePage() {
    return (
        <Flex align="center" justify="center" p={20}>
            <Article/>
        </Flex>
    );
}