import { useState } from 'react'
import { searchPokemon } from '../services/pokemon'

export function usePokemon ({ search }) {
    const [pokemon, setPokemonList] = useState([])

    const getPokemon = async () => {
        const newPokemonList = await searchPokemon({ search })
        setPokemonList(newPokemonList)
    }

    return { pokemon, getPokemon }
}