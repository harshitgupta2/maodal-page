import React from 'react'
import styles from './Eventlist.module.css'

export default function EventList({ events, deleteEvent }) {
  return (
    <div>
      {events.map((event, index) =>
        <div className={styles.card} key={event.id}>
          <h2>{index} - {event.title}</h2>
          <p>{event.location}- {event.date}</p>
          <button onClick={() => deleteEvent(event.id)}>delete button</button>
        </div>
      )
      }
    </div>
  )
}
