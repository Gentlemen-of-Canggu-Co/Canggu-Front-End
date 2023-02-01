import { useState, useEffect } from "react";
import axios from "axios";
import AddConsumable from "../components/SpotDetailsPage/AddConsumable";
import { useParams, Link } from "react-router-dom";
import Pictograms from "../components/SpotDetailsPage/Pictograms";
import Menu from "../components/SpotDetailsPage/Menu";
import Map from "../components/SpotDetailsPage/Map";
import Description from "../components/SpotDetailsPage/Description";
import EventCard from "../components/SpotDetailsPage/EventCard";
import SpotCard from "../components/SpotList/SpotCard";
import ConsumableCard from "../components/SpotDetailsPage/ConsumableCard";
import { Button } from "@mui/material";
import Breadcrumbs from "../components/Breadcrumbs"



function SpotDetailsPage() {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const { spotId } = useParams();
  const [spot, setSpot] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  console.log("LENGTH OF ARRAY",typeof spot.events)

  const getSpot = () => {
    axios
      .get(`${API_URL}/api/spots/${spotId}`)
      .then((response) => setSpot(response.data));
  }

  useEffect(() => {
    getSpot()
  }, [spotId]);
  

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
      <Breadcrumbs spot={spot} />
      <SpotCard spot={spot} />
      <Description spot={spot} />
      <ConsumableCard spotId={spotId} getSpot={getSpot} spot={spot} />
      <Menu spot={spot} />
      {/* <Map spot={spot} /> */}
{   spot.events.length > 0 && <EventCard spot={spot} />}
      {/* <AddConsumable ownerId={spotId} /> */}
    </div>
  );
}

export default SpotDetailsPage;
