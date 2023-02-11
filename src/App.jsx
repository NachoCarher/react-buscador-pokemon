import './App.css'
import resType from './mocks/resultsTypes.json'
import { Pokemon } from './components/Pokemon.jsx'

// Custom hook
export function usePokemon () {
  const pokemonList = resType.pokemon
  
  // Good practise if the API changes in the future
  const mappedPokemon = pokemonList.map((pokemon, index) => ({
    name: pokemon.pokemon.name,
    url: pokemon.pokemon.url
  }))

  return { pokemon : mappedPokemon }
}

function App() {
  const { pokemon : mappedPokemon } = usePokemon()

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
        <Pokemon typeResult={mappedPokemon} />
      </main>
    </div>
  )
}

export default App
