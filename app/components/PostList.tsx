'use client';

import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { PostProps } from '../types/PostProps.type';
import { Stack, SimpleGrid, Heading } from '@chakra-ui/react';

const PostList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );

        if (!response.ok) {
          throw new Error('failed to fetch data');
        }

        const postData = await response.json();
        setData(postData);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <Stack justifyContent='center' alignItems='center'>
      <Heading as='h2' size='lg' mb='6'>
        PostList
      </Heading>
      {/* <PostCard title='Post Title' body='Post Description' /> */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing='6'>
        {data.map((post: PostProps) => (
          <PostCard key={post.id} {...post} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default PostList;
