import { Flex } from '@chakra-ui/react';

import ArticleCard from '../components/ArticleCard';

export default function Home() {
  return (
    <Flex align="center" justify="center" p={20}>
      <ArticleCard />
    </Flex>
  );
}
