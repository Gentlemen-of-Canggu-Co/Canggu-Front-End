import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Menu from "../components/SpotDetailsPage/Menu";
import Description from "../components/SpotDetailsPage/Description";
import EventCard from "../components/SpotDetailsPage/EventCard";
import SpotCard from "../components/SpotList/SpotCard";
import ConsumableCard from "../components/SpotDetailsPage/ConsumableCard";
import { Button } from "@mui/material";
import Breadcrumbs from "../components/Breadcrumbs"
import Loading from "../components/Loading/Loading";



function SpotDetailsPage() {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const { spotId } = useParams();
  const [spot, setSpot] = useState({});
    const [isLoading, setIsLoading] = useState(true)


  const getSpot = () => {
    setIsLoading(true)
    axios
      .get(`${API_URL}/api/spots/${spotId}`)
      .then((response) => {
        setSpot(response.data);
        setIsLoading(false)});
  }

  useEffect(() => {
    getSpot()
  }, [spotId]);

  if(isLoading){
    return <Loading/>
  }

  return (
    <div>

{/* <div>
      <Link to={`/spots/${spot._id}/edit`}>
        <Button variant="contained">Edit Spot</Button>
      </Link>
      <Link to={`/events/${spot._id}/create`}>
        <Button variant="contained">Add Event</Button>
      </Link>
</div> */}
      {/* <Breadcrumbs spot={spot} /> */}
      <SpotCard spot={spot} />
      <Description spot={spot} />
      <ConsumableCard spotId={spotId} getSpot={getSpot} spot={spot} />
      <Menu spot={spot} />
      { spot.events.length > 0 && <EventCard spot={spot} />}
      </div>
  );
}

export default SpotDetailsPage;
