'use client';

import React, { useState, useEffect } from 'react';
import {
  HStack,
  Stack,
  Button,
  FormControl,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import FormCard from './FormCard';
import { PokemonProps } from '../types/PokemonProps.type';

const PokemonForm = () => {
  const [data, setData] = useState<PokemonProps[]>([]);
  const [pokemon, setPokemon] = useState<PokemonProps | null>(null);
  const [search, setSearch] = useState('');
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const pokemons = await response.json();
      setData(pokemons.results);
    }

    getData();
  }, []);

  console.log(search);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingState(true);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      if (response.ok) {
        const pokemonQuery = await response.json();
        setPokemon(pokemonQuery);
      } else {
        setPokemon(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <Stack spacing='6'>
      <form onSubmit={handleSubmit}>
        <Stack>
          <HStack spacing='4'>
            <FormControl>
              <Input
                type='text'
                placeholder='Search your pokemon'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size='lg'
              />
            </FormControl>
            <Button
              type='submit'
              colorScheme='teal'
              isLoading={loadingState}
              loadingText='Searching'
              size='lg'
            >
              Search
            </Button>
          </HStack>
        </Stack>
      </form>
      <SimpleGrid minChildWidth='300px' spacing='6'>
        {pokemon && pokemon.id !== undefined ? (
          <FormCard key={pokemon.id} {...pokemon} />
        ) : (
          data.map((pokemons) => <FormCard key={pokemons.id} {...pokemons} />)
        )}
      </SimpleGrid>
    </Stack>
  );
};

export default PokemonForm;
