import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../components/SpotDetailsPage/EventCard";
import Breadcrumbs from "../components/Breadcrumbs";
import Loading from "../components/Loading/Loading";

function EventList() {
  const [events, setEvents] = useState([]);
  const [spots, setSpots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${API_URL}/api/events`).then((response) => {
      setEvents(response.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    axios.get(`${API_URL}/api/spots`).then((result) => setSpots(result.data));
  }, []);

  return (
    <div>
<<<<<<< HEAD

      <h1 className="event-list">Upcoming events in Canggu</h1>
      {isLoading ? <Loading/> :<EventCard events={events} />}
=======
      <h1>Upcoming events in Canggu</h1>
      {isLoading ? <Loading /> : <EventCard events={events} />}
>>>>>>> 569c3a2159c0bf5d79f0be6f5314b4af0d31d50a
    </div>
  );
}

export default EventList;
