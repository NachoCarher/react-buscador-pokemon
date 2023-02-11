export function ListOfPokemon ({ pokemonList }) {
    return (
      <ul className="listaPokemon">
        {
          pokemonList.map((pokemon, index) => (
            <li key={index} className="pokemon">
                <h2>{pokemon.name}</h2>
                <p>{pokemon.url}</p>
            </li>
          ))
        }
      </ul>
    )
}

export function NoTypeResults () {
  return (
    <p>Type doesn't exist</p>
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