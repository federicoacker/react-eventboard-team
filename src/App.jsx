import { useState } from "react";
import EventList from './components/EventList.jsx';
import events from './data/events.js';


function App() {

  const [category, setCategory] = useState('tutti')

  const handleChangeCategory = (event) => {
    setCategory(event.target.value)
  }

  const filteredEvents = events.filter(event => {
    return category === "tutti" ? true : event.category === category;
  });
 const count = filteredEvents.length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>EventBoard</h1>
        <p className="subtitle">Organizza e scopri gli eventi</p>
        <h2>Events found : {count}</h2>
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
