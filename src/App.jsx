import './App.css'

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Buscador Pokémon</h1>
        <form className='form'>
          <input type='text' placeholder='Pikachu, Charmander, Togepi...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        Aquí iran los resultados de la búsqueda
      </main>
    </div>
  )
}

export default App
