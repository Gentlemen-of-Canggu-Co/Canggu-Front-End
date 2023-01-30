import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import 'add-to-calendar-button';
import DeleteEvent from "../components/DeleteEvent";
import EventCard from "../components/SpotDetailsPage/EventCard"

function EventDetailPage(){

const API_URL= "http://localhost:5005"
const {eventId} = useParams()
const [event, setEvent] = useState({})
const [spot, setSpot] = useState({})

useEffect(() => {
  axios.get(`${API_URL}/api/events/${eventId}`)
    .then(response => setEvent(response.data)
    )
    
}, [eventId]) 

useEffect(() => {
    axios.get(`${API_URL}/api/spots/${event.owner}`)
      .then(response => setSpot(response.data)
      )
      
  }, [event.owner])


    return(
       <div>

<Link to={`/events/${event._id}/edit`}><button>Edit Event</button></Link>
<EventCard spot={spot} event={event} />
        

<div style={{display: "flex", flexDirection: "column"}}>


<button>See more Events</button>
<add-to-calendar-button
  name={event.name}
  options="'Google'"
  location={spot.name}
  startDate={event.date}
  endDate={event.date}
  startTime={event.date}
  endTime={event.date}
  // timeZone="America/Los_Angeles"
></add-to-calendar-button>

<Link to={'/events'}><button>See more Events</button></Link>
<DeleteEvent eventId={eventId}/>

</div>


        </div>
    )
}


export default EventDetailPage