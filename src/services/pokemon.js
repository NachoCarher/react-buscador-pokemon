export const searchPokemon = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${search}`)
        const json = await response.json()

        const pokemonList = json.pokemon

        return pokemonList.map((pokemon) => ({
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url
          }))
    } catch (error) {
        throw new Error('Error searching pokemon by type')
    }
}