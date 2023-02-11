import './App.css'
import resType from './mocks/resultsTypes.json'

function App() {
  const pokemonList = resType.pokemon
  // existe el tipo
  const typeExists = resType.name != null

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
        {
          typeExists ? (
            <div className='pokemon'>

              <h3>{resType.name}</h3>
              <ul>
                {
                  pokemonList.map((pokemon, index) => (
                    <li key={index}>{pokemon.pokemon.name}</li>
                  ))
                }
              </ul>
            </div>
          ) : (
            <p>The type does not exist</p>
          )
        }
      </main>
    </div>
  )
}

export default App
