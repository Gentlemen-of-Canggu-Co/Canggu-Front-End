import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../components/SpotDetailsPage/EventCard";

function EventList() {
  const [events, setEvents] = useState([]);
  const [spots, setSpots] = useState([]);
  const API_URL = "http://localhost:5005";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/events`)
      .then((response) => setEvents(response.data));
  }, []);

  useEffect(() => {
    axios.get(`${API_URL}/api/spots`).then((result) => setSpots(result.data));
  }, []);

  return (


<div>
  <h1>Upcoming events in Canggus Spots</h1>
  <EventCard events={events}/>
</div>


  );
}

export default EventList;
