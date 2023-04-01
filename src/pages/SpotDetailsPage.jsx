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
import Footer from "./Footer";
import { Helmet } from 'react-helmet';
import Breadcrumbs from "../components/Breadcrumbs";

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
    <div className="footerWrap">
          <Helmet>
        <title>{spot.name} | Chunks of Canggu</title>
        <meta name="description" content="Images, Review, Menu & more: Find out everything you need to know about ${spot.name}" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
    <div>
    <Breadcrumbs spot={spot} />
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

            <div><Footer /></div>
            </div>
  );
}

export default SpotDetailsPage;
