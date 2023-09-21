import React from 'react';
import PokemonForm from '../components/PokemonForm';
import { Stack } from '@chakra-ui/react';

const Events = () => {
  return (
    <Stack p={{ base: '4', sm: '6', lg: '12' }} h='100vh'>
      <PokemonForm />
    </Stack>
  );
};

export default Events;
