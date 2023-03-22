export const searchPokemon = async ({ search, liveMode }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${search}`)
        const json = await response.json()

        const pokemonList = json.pokemon
        //const spritesRepository = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`
        //                           https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif
        const spritesRepository = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`


        return pokemonList.map((pokemon) => ({
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url,
            pokedexNumber: pokemon.pokemon.url.split('/')[6],
            //sprite: `${spritesRepository}${pokemon.pokemon.url.split('/')[6]}.png`,
            sprite: `${spritesRepository}${liveMode ? "versions/generation-v/black-white/animated/" : "other/official-artwork/"}${pokemon.pokemon.url.split('/')[6]}${liveMode ? ".gif" : ".png"}`,
        }))
    } catch (error) {
        throw new Error('Error searching pokemon by type')
    }
}