import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Menu from "../components/SpotDetailsPage/Menu";
import Description from "../components/SpotDetailsPage/Description";
import EventCard from "../components/SpotDetailsPage/EventCard";
import SpotCard from "../components/SpotList/SpotCard";
import ConsumableCard from "../components/SpotDetailsPage/ConsumableCard";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../context/auth.context";
import "../components/SpotList/spotlist.css"


function SpotDetailsPage() {
  const { isLoggedIn } = useContext(AuthContext);
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
    <div className="desktopLayout">
    <div>
      <SpotCard spot={spot} />
    </div>
    <div>
      <Description spot={spot} />
      </div>
      </div>

      <ConsumableCard spotId={spotId} getSpot={getSpot} spot={spot} />
      <Menu spot={spot} />
      {/* { spot.events.length > 0 && <EventCard spot={spot} />}
      {isLoggedIn && (
                    <Link to={`/events/${spotId}/create`}>
                    <button type="button" className="btn btn-success" style={{margin: '10px'}}>Add new event</button>
                    </Link>   
            )} */}
    </div>
  );
}

export default SpotDetailsPage;
