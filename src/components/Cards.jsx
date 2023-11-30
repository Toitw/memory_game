import React, { useEffect } from 'react';
import useRandomPokemonGrid from '../API/Api';
import { useState } from 'react';
import '../styles/Cards.css';

const Cards = () => {
    const pokemonsFromApi = useRandomPokemonGrid();
    const [pokemons, setPokemons] = useState([]);
    const [clickedPokemon, setClickedPokemon] = useState([]);
    // const [score, setScore] = useState(0);

    useEffect(() => {
        setPokemons(pokemonsFromApi);
    }, [pokemonsFromApi]);

    const handleCardClick = (pokemonId) => {
        if (clickedPokemon.includes(pokemonId)) {
            // setScore(0);
            setClickedPokemon([]);
        } else {
            // setScore(score + 1);
            setClickedPokemon([...clickedPokemon, pokemonId]);
            ShuffleArray(pokemons);
        }
    };

    const ShuffleArray = () => {
        let shuffled = [...pokemons];
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setPokemons(shuffled);
    };




    if (pokemons.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="pokemon-grid">
                {pokemons.map(pokemon => (
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        key={pokemon.uniqueId}
                        onClick={() => handleCardClick(pokemon.uniqueId)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;