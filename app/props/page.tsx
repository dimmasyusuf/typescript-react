import React from 'react';
import { Stack } from '@chakra-ui/react';
import PostList from '../components/PostList';

const Props = () => {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      p={{ base: 4, sm: 6, lg: 12 }}
    >
      <PostList />
    </Stack>
  );
};

export default Props;
