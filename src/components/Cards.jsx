import React from 'react';
import RandomPokemonGrid from '../API/Api';
import '../styles/Cards.css';

const Cards = () => {
    const pokemons = RandomPokemonGrid();

    if (pokemons.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pokemon-grid">
            {pokemons.map(pokemon => (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} key={pokemon.id} />
            ))}
        </div>
    );
};

export default Cards;
