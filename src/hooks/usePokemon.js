import resType from '../mocks/resultsTypes.json'
import errorResult from '../mocks/errorResult.json'
import { useState } from 'react'

export function usePokemon ({ search }) {
    const [pokemonList, setPokemonList] = useState([])

    const getPokemon = () => {
        if (search) {
            fetch(`https://pokeapi.co/api/v2/type/${search}`)
                .then((res) => res.json())
                .then((json) => {
                    setPokemonList(json.pokemon)
                })
        }
        else {
            setPokemonList([])
        }
    }

    const mappedPokemon = pokemonList.map((pokemon) => ({
      name: pokemon.pokemon.name,
      url: pokemon.pokemon.url
    }))

    return { pokemon : mappedPokemon, getPokemon }
}