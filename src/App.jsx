import './App.css'
import resType from './mocks/resultsTypes.json'

function App() {
  const pokemonList = resType.pokemon
  const typeExists = resType.name != null

  const renderPokemonList = () => {
    if (typeExists) {
      return (
        <ul>
          {
            pokemonList.map((pokemon, index) => (
              <li key={index}>{pokemon.pokemon.name}</li>
            ))
          }
        </ul>
      )
    } else {
      return (
        <p>Type doesn't exist</p>
      )
    }
  }

  return (
    <div className='App'>
      <header>
        <h1>Buscador Pokémon</h1>
        <form className='form'>
          <input type='text' placeholder='Water, fire, dragon..' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {renderPokemonList()}
      </main>
    </div>
  )
}

export default App
