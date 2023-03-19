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

function TopListDetailsPage() {

    const { isLoggedIn } = useContext(AuthContext);
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
    const { toplistId } = useParams();
    const [toplist, setToplist] = useState({});
    const [tenthPlaceSpotId, setTenthPlaceSpotId] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const getToplist = () => {
        setIsLoading(true)
        axios
          .get(`${API_URL}/api/toplists/${toplistId}`)
          .then((response) => {
            setToplist(response.data);
            setIsLoading(false)});
      }

      // if(toplist.tenthPlaceSpotId !== ""){
      //   axios
      //     .get(`${API_URL}/api/spots/${toplist.tenthPlaceSpotId}`)
      //       .then((response) => {
      //         setTenthPlaceSpotId(response.data)
      //         console.log(response.data)
      //       })
      // }

    
      useEffect(() => {
        getToplist()
      }, [toplistId]);
    
      if(isLoading){
        return <Loading/>
      }

    return(
        <div>
        <img src={toplist.heroImage} alt={toplist.title} style={{width: "100vw"}}/>
<h1>{toplist.title}</h1>
<p>{toplist.introText}</p>
{tenthPlaceSpotId.name && <h2>10. {tenthPlaceSpotId.name}</h2>}

        </div>
    )
}

export default TopListDetailsPage