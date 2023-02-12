import './App.css'
import { Pokemon } from './components/Pokemon.jsx'
import { usePokemon } from './hooks/usePokemon.js'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const { pokemon, getPokemon, error, loading} = usePokemon({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = event.target.elements
    setSearch(query.value)
    getPokemon()
  }

  return (
    <div className='App'>
      <header>
        <h1>Pokemon finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' type='text' placeholder='Water, fire, dragon..' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Loading...</p> : <Pokemon typeResult={pokemon} />}
      </main>
    </div>
  )
}

export default App
