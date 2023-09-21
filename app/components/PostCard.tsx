import React from 'react';
import { PostProps } from '../types/PostProps.type';
import { Box, Heading, Text } from '@chakra-ui/react';

const PostCard = (props: PostProps) => {
  return (
    <Box shadow='lg' borderRadius='lg' borderWidth='1px' p='4'>
      <Heading as='h3' size='md' mb='2'>
        {props.title}
      </Heading>
      <Text>{props.body}</Text>
    </Box>
  );
};

export default PostCard;
