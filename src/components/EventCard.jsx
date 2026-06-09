import React from "react";

function EventCard({ title, date, category, status }) {

    return (
        <>
        <div className="event-container">
            <h1> {title} </h1>

            <p>data: {date} </p>
            <p>categoria: {category} </p>
            <p>stato: {status} </p>

        </div>
        </>
    )
}
export default EventCard;