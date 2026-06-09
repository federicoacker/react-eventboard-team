import EventCard from "./EventCard.jsx";

function EventList({ events }) {
    return (
        events.map(event => <EventCard key={event.id} title={event.title} date={event.date} category={event.category} status={event.status} />)
    )
}

export default EventList