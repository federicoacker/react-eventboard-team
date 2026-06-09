
import EventList from './components/EventList';
import './App.css';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('tutti')

  const handleChangeCategory = (event) => {
    setCategory(event.target.value)
  }
  return (
    <div className="app">
      <header className="app-header">
        <h1>EventBoard</h1>
        <p className="subtitle">Organizza e scopri gli eventi</p>
      </header>
      <form>
        <label htmlFor="filtra-per-categoria">Filtra per categoria</label>
        <select
          id="filtra-per-categoria"
          value={category}
          onChange={handleChangeCategory}>
          <option value="Tutti">Tutti</option>
          <option value="Conferenze">Conferenze</option>
          <option value="Workshop">Workshop</option>
          <option value="Meetup">Meetup</option>
        </select>
      </form>
      <p>Categoria Selezionata:{category}</p>

      <main className="app-main">
        <EventList />
      </main>
    </div>
  );
}

export default App
