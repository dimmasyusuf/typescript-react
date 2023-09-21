import React from 'react';
import { Center, Text } from '@chakra-ui/react';

const Child = () => {
  return (
    <Center borderWidth='1px' borderRadius='lg' h='210px' shadow='lg'>
      <Text>Child Component</Text>
    </Center>
  );
};

export default Child;
