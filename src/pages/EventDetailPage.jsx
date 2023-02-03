import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "add-to-calendar-button";
import DeleteEvent from "../components/DeleteEvent";
import EventCard from "../components/SpotDetailsPage/EventCard";
import Button from "@mui/material/Button";
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
    setIsLoading(true);
    axios.get(`${API_URL}/api/events/${eventId}`).then((response) => {
      setEvent(response.data);
      console.log(response.data.owner);
      setIsLoading(false);
    });
  }, [eventId]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${API_URL}/api/spots/${event.owner}`).then((response) => {
      setSpot(response.data);
      console.log(response.data);
      setIsLoading(false);
    });
  }, [event.owner]);

  return (
    <div>
      


      <EventCard spot={spot} event={event} />

      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="card" style={{ width: "100vw" }}>
          <div className="card-header">
            <Typography component={"div"}>
              <h1>
                {event.name} @ {spot.name}
              </h1>
            </Typography>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <Typography component={"div"}>
                {event.startDate}: {event.startTime} - {event.endTime} | Cost:{" "}
                {event.price}k
              </Typography>
            </li>
            <li className="list-group-item">
              {" "}
              <Typography component={"div"} style={{ textAlign: "justify" }}>
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
                <Typography component={"div"}>
                  No need to register. Just drop by and have fun! ❤️
                </Typography>
              </li>
            )}
          </ul>
        </div>
      )}

      {isLoading === true ? (
        <Loading />
      ) : (
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
          ></add-to-calendar-button>
        </div>
      )}
    </div>
  );
}

export default EventDetailPage;
