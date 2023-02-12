export function ListOfPokemon ({ pokemonList }) {
    return (
      <ul className="pokemonList">
        {
          pokemonList.map((pokemon, index) => (
            <li key={index} className="pokemon">
                <div className="pokemon__title">
                    <h2 className="pokedex-number">{pokemon.pokedexNumber}</h2>
                    <h2 className="pokemon-name">{pokemon.name}</h2>
                </div>
                <img src={pokemon.sprite} alt="pokemon sprite" />
            </li>
          ))
        }
      </ul>
    )
}

export function NoTypeResults () {
  return (
    <p>No results</p>
  )
}

export function Pokemon ({ typeResult }) {
    const typeExists = typeResult && typeResult.length > 0

    return (
        typeExists 
        ? <ListOfPokemon pokemonList={typeResult} />
        : <NoTypeResults />
    )
}