export function ListOfPokemon ({ pokemonList }) {
    return (
      <ul>
        {
          pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon.pokemon.name}</li>
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