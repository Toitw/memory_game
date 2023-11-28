import React, { useEffect, useState } from 'react';

const PokemonFetcher = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const randomId = Math.floor(Math.random() * 898) + 1; // Generate a random ID between 1 and 898 (total number of Pokémon)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

export default PokemonFetcher;
