import { useState } from "react";

const initialEvents =[
  {id:1 , title:"Event1"},
  {id:2, title:"Event2"},
  {id:3 , title:"Event3"}
];


function App() {
  const [events, setEvents]= useState(initialEvents);

  const visibleEvents = events;
  const count = visibleEvents.length;

  return (
    <div>
      <h2>Events found : {count}</h2>

      <ul>
        {visibleEvents.map(event=>(
          <li key={event.id}> {event.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
