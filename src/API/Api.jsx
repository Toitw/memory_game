import React, { useState, useEffect } from 'react';

function RandomPokemonGrid() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            let fetchedPokemons = [];
            for (let i = 0; i < 12; i++) {
                const randomId = Math.floor(Math.random() * 898) + 1;
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
                const data = await response.json();
                fetchedPokemons.push(data);
            }
            setPokemons(fetchedPokemons);
        };

        fetchPokemons();
    }, []);

    return pokemons
}

export default RandomPokemonGrid;
