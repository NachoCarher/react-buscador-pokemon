import './App.css'
import { Pokemon } from './components/Pokemon.jsx'
import { usePokemon } from './hooks/usePokemon.js'

function App() {
  const { pokemon } = usePokemon()

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
        <Pokemon typeResult={pokemon} />
      </main>
    </div>
  )
}

export default App
