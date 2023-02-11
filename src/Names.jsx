import './App.css'
import resPokemon from './mocks/results.json'

function App() {
  const pokemonExists = resPokemon && resPokemon.name

  return (
    <div className='App'>
      <header>
        <h1>Buscador Pokémon</h1>
        <form className='form'>
          <input type='text' placeholder='Pikachu, Charmander...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {
          pokemonExists ? (
            <div className='pokemon'>
              <h3>{resPokemon.name}</h3>
              <ul>
                {
                  resPokemon.types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                  ))
                }
              </ul>
              <img src={resPokemon.sprites.front_default} alt={resPokemon.name} />
            </div>
          ) : (
            <p>No hay pokémon</p>
          )
        }
      </main>
    </div>
  )
}

export default App
