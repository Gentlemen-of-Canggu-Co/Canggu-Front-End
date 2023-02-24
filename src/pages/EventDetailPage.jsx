import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "add-to-calendar-button";
import DeleteEvent from "../components/DeleteEvent";
import EventCard from "../components/SpotDetailsPage/EventCard";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Loading from "../components/Loading/Loading";

function EventDetailPage() {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [spot, setSpot] = useState({});
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${API_URL}/api/events/${eventId}`)
      .then((response) => {
        setEvent(response.data);
        console.log(response.data.owner);
        setIsLoading(false)})
  }, [eventId])
    

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${API_URL}/api/spots/${event.owner}`)
      .then((response) => {
        setSpot(response.data);
        console.log(response.data)
        setIsLoading(false)})
  }, [event.owner]);

  return (
    <div>
      

      <EventCard spot={spot} event={event} />

      {isLoading === true ? <Loading/> : <div className="card" style={{ width: "100vw" }}>
        <div className="card-header">
          <Typography component={'div'} sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
            <h1>
              {event.name} at {spot.name}
            </h1>
          </Typography>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            {event.price > 0 && <Typography component={'div'} sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
              {event.startDate}: {event.startTime} - {event.endTime} | Cost:{" "}
              {event.price}k
            </Typography>}
          </li>
          <li className="list-group-item">
            {" "}
            <Typography component={'div'} sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
              {event.description}
            </Typography>
          </li>
          {event.signUpRequired && (
            <li className="list-group-item">
              Link to Signup: {event.signUpLink}
            </li>
          )}
          {!event.signUpRequired && (
            <li className="list-group-item">
              <Typography component={'div'} sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                No need to register. Just drop by and have fun! ❤️
              </Typography>
            </li>
          )}
        </ul>
      </div>}

      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      {isLoggedIn && (
        <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "20px" }}>
          <Link to={`/events/${event._id}/edit`}>
          <button type="button" className="btn btn-success">Edit Event</button>
          </Link>
          <DeleteEvent eventId={eventId} />
        </div>
      )}
    </div>
  );
}

export default EventDetailPage;
