import React from 'react';
import { Center, Box, Heading } from '@chakra-ui/react';

const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center w='100%' h='100vh'>
      <Box borderWidth='1px' shadow='lg' borderRadius='lg' p='4' h='300px'>
        <Heading mb='4'>Parent Component</Heading>
        {children}
      </Box>
    </Center>
  );
};

export default Parent;
