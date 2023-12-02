import React, { useState, useEffect } from 'react';
import useRandomPokemonGrid from '../API/Api';
import '../styles/Cards.css';

const Cards = () => {
    const pokemonsFromApi = useRandomPokemonGrid();
    const [pokemons, setPokemons] = useState([]);
    const [clickedPokemon, setClickedPokemon] = useState([]);
    // const [score, setScore] = useState(0);

    useEffect(() => {
        setPokemons(pokemonsFromApi);
    }, [pokemonsFromApi]);

    useEffect(() => {
        shuffleArray();
    }, [clickedPokemon]); // Shuffle whenever clickedPokemon changes

    const handleCardClick = (pokemonId) => {
        if (clickedPokemon.includes(pokemonId)) {
            // setScore(0);
            setClickedPokemon([]);
        } else {
            // setScore(score + 1);
            setClickedPokemon([...clickedPokemon, pokemonId]);
        }
    };

    const shuffleArray = () => {
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
                        key={pokemon.id} // Assuming you use the ID from the Pokémon API
                        onClick={() => handleCardClick(pokemon.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
