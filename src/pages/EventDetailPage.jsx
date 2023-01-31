import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "add-to-calendar-button";
import DeleteEvent from "../components/DeleteEvent";
import EventCard from "../components/SpotDetailsPage/EventCard";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

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

      <EventCard spot={spot} event={event} />
      <Typography>{event.description}</Typography>

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

        <Link to={"/events"}>
          <Button variant="contained">See more Events</Button>
        </Link>
      </div>
    </div>
  );
}

export default EventDetailPage;
