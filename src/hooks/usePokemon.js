import { useEffect, useState } from 'react'
import { searchPokemon } from '../services/pokemon'

export function usePokemon ({ search, liveMode }) {
    const [pokemon, setPokemonList] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        getPokemon()
    }, [search, liveMode])

    const getPokemon = async () => {
        try {
            setLoading(true)
            const newPokemonList = await searchPokemon({ search, liveMode })
            setPokemonList(newPokemonList)
        }
        catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return { pokemon, error, loading }
}