export const searchPokemon = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${search}`)
        const json = await response.json()

        const pokemonList = json.pokemon
        const spritesRepository = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`

        return pokemonList.map((pokemon) => ({
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url,
            pokedexNumber: pokemon.pokemon.url.split('/')[6],
            sprite: `${spritesRepository}${pokemon.pokemon.url.split('/')[6]}.png`,          }))
    } catch (error) {
        throw new Error('Error searching pokemon by type')
    }
}