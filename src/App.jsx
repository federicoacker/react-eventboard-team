
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>EventBoard</h1>
        <p className="subtitle">Organizza e scopri gli eventi</p>
      </header>

      <main className="app-main">
        <EventList />
      </main>
    </div>
  );
}

export default App
