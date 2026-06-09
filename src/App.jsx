
import EventList from './components/EventList.jsx';
import events from './data/events.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('tutti')

  const handleChangeCategory = (event) => {
    setCategory(event.target.value)
  }

  const filteredEvents = events.filter(event => {
    return category === "tutti" ? true : event.category === category;
  });

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
          <option value="tutti">Tutti</option>
          <option value="conferenze">Conferenze</option>
          <option value="workshop">Workshop</option>
          <option value="meetup">Meetup</option>
        </select>
      </form>
      <p>Categoria Selezionata:{category}</p>

      <main className="app-main">
        <EventList events={filteredEvents} />
      </main>
    </div>
  );
}

export default App
