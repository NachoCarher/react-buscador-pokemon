import './App.css'
import resType from './mocks/resultsTypes.json'
import { Pokemon } from './components/Pokemon.jsx'

function App() {
  const pokemonList = resType.pokemon
  
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
        <Pokemon typeResult={pokemonList} />
      </main>
    </div>
  )
}

export default App
