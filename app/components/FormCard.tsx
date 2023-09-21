import React from 'react';
import { VStack, Image, Heading } from '@chakra-ui/react';
import { PokemonProps } from '../types/PokemonProps.type';

const FormCard = (props: PokemonProps) => {
  const pokemonIndex = props.url
    ? props.url.split('/')[props.url.split('/').length - 2]
    : '';

  return (
    <VStack
      borderWidth='1px'
      shadow='lg'
      borderRadius='lg'
      p='4'
      alignItems='center'
      justifyContent='center'
    >
      <Image
        src={
          props.url === undefined
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
        }
        alt={props.name}
      />
      <Heading as='h3' size='md' mt='4'>
        {props.name}
      </Heading>
    </VStack>
  );
};

export default FormCard;
