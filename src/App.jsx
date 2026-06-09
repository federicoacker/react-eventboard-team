import { useState } from "react";
import EventList from './components/EventList.jsx';
import events from './data/events.js';


function App() {

  const [category, setCategory] = useState('tutti');
  const [order, setOrder] = useState("asc");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value)
  }
  const handleChangeOrder = () => {
    if(order === "asc"){
      setOrder("desc");
    }
    else{
      setOrder("asc");
    }
  }

  const filteredEvents = events.filter(event => {
    return category === "tutti" ? true : event.category === category;
  });

 const count = filteredEvents.length;
  if(order === "asc"){
    filteredEvents.sort((a,b) => {
      if(a.date > b.date){
        return -1;
      }
      else if (a.date < b.date) {
        return 1;
      }
      else {
        return 0;
      }
    })
  }
  else if (order === "desc"){
    filteredEvents.sort((a,b) => {
      if(a.date > b.date){
        return 1;
      }
      else if (a.date < b.date) {
        return -1;
      }
      else {
        return 0;
      }
    })
  }

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
      <button onClick={handleChangeOrder}>Cambia Ordine {order === "asc" ? "Ascendente" : "Discendente"}</button>
      <main className="app-main">
        <EventList events={filteredEvents} />
      </main>
    </div>
  );
}

export default App
