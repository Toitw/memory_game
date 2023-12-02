import React, { useState, useEffect } from 'react';
import useRandomPokemonGrid from '../API/Api';
import '../styles/Cards.css';

const Cards = () => {
    const pokemonsFromApi = useRandomPokemonGrid();
    const [pokemons, setPokemons] = useState([]);
    const [clickedPokemon, setClickedPokemon] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [winMessage, setWinMessage] = useState('');

    useEffect(() => {
        setPokemons(pokemonsFromApi);
    }, [pokemonsFromApi]);

    useEffect(() => {
        shuffleArray();
    }, [clickedPokemon]); // Shuffle whenever clickedPokemon changes



    const handleCardClick = (pokemonId) => {
        if (clickedPokemon.includes(pokemonId)) {
            setScore(0);
            setHighScore(score > highScore ? score : highScore);
            setClickedPokemon([]);
        } else {
            setScore(score + 1);
            setClickedPokemon([...clickedPokemon, pokemonId]);
            if (score === 11) {
                setWinMessage('You win!');
            }
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
                        key={pokemon.id} 
                        onClick={() => handleCardClick(pokemon.id)}
                    />
                ))}
            </div>
            <div className="score">
                <h1>Score: {score}</h1>
                <h1>High Score: {highScore}</h1>
                <h2 style={{ color: 'red', fontWeight: 'bold' }}>{winMessage}</h2>
            </div>
        </div>
    );
};

export default Cards;
