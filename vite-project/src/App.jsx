import { useState } from "react";

function App() {
 
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: "Spiderman 2023", id: 1 },
    { title: "need for speed 2006", id: 2 },
    { title: "last of us 2 2020", id: 3 },
    { title: "batman 2022", id: 4 },
  ]);
  const handlClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  };
  return (
    <>
      <div className="App">
        <div><button onClick={()=> setShowEvents(false)}>Hide</button></div>
        <div><button onClick={()=> setShowEvents(true)}>Show</button></div>
        {showEvents && events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index + 1} - {event.title}
            </h2>
            <button onClick={() => handlClick(event.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
