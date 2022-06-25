import react from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import { useState, useEffect } from 'react';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';



function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const deleteEvent= (id) => {
    setEvents(events.filter((event) => {
      return id !== event.id
    }))



  }
  const handleClose = () => {
    setShowModal(false)
  }
  const subtitle = "Event in my area "

  return (<div className="App">
    <Title title="Event in your area " subtitle={subtitle} />
    {/* <Title title= "another title" subtitle = "another subtitle"/> */}
    {showEvents && (
      <div>
        <button onClick={() => setShowEvents(false)}>hide event</button>
      </div>
    )}
    {!showEvents && (
      <div>
        <button onClick={() => setShowEvents(true)}>show event</button>
      </div>
    )}
    {showEvents && <EventList events={events} deleteEvent={deleteEvent} />}
    {/* <Modal>
   <h2>10% of coupon code!!</h2>
   <p>use the code  Ninja10 at the  checkout</p>
   </Modal> */}
    {showModal && <Modal isSalesModal={true}>
      <NewEventForm addEvent={addEvent} />
    </Modal>}
    <div>
      <button onClick={() => setShowModal(true)}>Add new Event</button>
    </div>
  </div>
  );

}

export default App;
