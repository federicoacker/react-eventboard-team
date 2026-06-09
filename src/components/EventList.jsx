import EventCard from "./EventCard.jsx";

function EventList({ events }) {

    if (events.length === 0) {
        return <h2>Nessun Evento trovato</h2>
    }

    return (
        events.map(event => <EventCard key={event.id} title={event.title} date={event.date} category={event.category} status={event.status} />)
    )
}

export default EventList