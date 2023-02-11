import resType from '../mocks/resultsTypes.json'

// Custom hook
export function usePokemon () {
    const pokemonList = resType.pokemon
    
    // Good practise if the API changes in the future
    const mappedPokemon = pokemonList.map((pokemon, index) => ({
      name: pokemon.pokemon.name,
      url: pokemon.pokemon.url
    }))

    return { pokemon : mappedPokemon }
}