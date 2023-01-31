import { useState, useEffect } from "react";
import axios from "axios";
import EventListCard from "../components/EventList/EventListCard";
// import EventListSeoText from "../components/EventList/EventListSeoText";
import Loading from '../components/Loading/Loading';

function EventList() {
  const [events, setEvents] = useState([]);
  const [spots, setSpots] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const API_URL = "http://localhost:5005";

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/api/events`)
      .then((response) => {
        setEvents(response.data);
        setIsLoading(false)
      });
  }, []);

  useEffect(() => {
    axios.get(`${API_URL}/api/spots`).then((result) => setSpots(result.data));
  }, []);

  return (


<div>
  
  <h1>Upcoming events in Canggus Spots</h1>
  {isLoading ? <Loading/> : <EventListCard events={events} spots={spots} />}     
  {/* <EventListSeoText /> */}

</div>


  );
}

export default EventList;
