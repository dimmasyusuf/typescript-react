import PostList from './components/PostList';
import { Stack, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Stack
        justifyContent='center'
        alignItems='center'
        p={{ base: 4, sm: 6, lg: 12 }}
      >
        <Heading as='h1' size='xl' mb='8'>
          Hello Typescript!
        </Heading>
        <PostList />
      </Stack>
    </main>
  );
}
