import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "add-to-calendar-button";
import DeleteEvent from "../components/DeleteEvent";
import EventCard from "../components/SpotDetailsPage/EventCard";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Breadcrumbs from "../components/Breadcrumbs"


function EventDetailPage() {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [spot, setSpot] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/api/events/${eventId}`)
      .then((response) => setEvent(response.data));
  }, [eventId]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/spots/${event.owner}`)
      .then((response) => setSpot(response.data));
  }, [event.owner]);

  return (
    <div>


      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to={`/events/${event._id}/edit`}>
          <Button variant="contained">Edit Event</Button>
        </Link>
        <DeleteEvent eventId={eventId} />
      </div>


      <Breadcrumbs event={event} />
      <EventCard spot={spot} event={event} />



      <div className="card" style={{width: "100vw"}}>
  <div className="card-header">
    <Typography><h1>{event.name} @ {spot.name}</h1></Typography>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">      <Typography>{event.startDate}: {event.startTime} - {event.endTime} | Cost: {event.price}k</Typography>
</li>
    <li className="list-group-item">      <Typography style={{textAlign: "justify"}}>{event.description}</Typography></li>
    {event.signUpRequired &&<li className="list-group-item">Link to Signup: {event.signUpLink}</li>}
    {!event.signUpRequired &&<li className="list-group-item"><Typography>No need to register. Just drop by and have fun! ❤️</Typography></li>}
  </ul>
</div>






      {/* <Typography><h1>{event.name} @ {spot.name}</h1></Typography>

      <div style={{display: "flex", justifyContent: "space-around"}}>
      <Typography>{event.startDate}: {event.startTime} - {event.endTime}</Typography>
      <Typography>Cost: {event.price}k</Typography>
      </div>



      <Typography style={{textAlign: "justify"}}>{event.description}</Typography>

      
{event.signUpRequired && 
<Typography>Link to Signup: {event.signUpLink}</Typography>
  }

  {!event.signUpRequired && 
<Typography>No need to register. Just drop by and have fun! ❤️</Typography>
  }   */}


      <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
        <add-to-calendar-button
          name={event.name}
          options="'Google'"
          location={spot.name}
          startDate={event.startDate}
          endDate={event.endDate}
          startTime={event.startTime}
          endTime={event.endTime}
          timeZone="Asia/Makassar"
          // timeZone="America/Los_Angeles"
        ></add-to-calendar-button>

        {/* <Link to={"/events"}>
          <Button variant="contained">See more Events</Button>
        </Link> */}
      </div>
    </div>
  );
}

export default EventDetailPage;
