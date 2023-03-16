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
    const [isLoading, setIsLoading] = useState(true)

    const getToplist = () => {
        setIsLoading(true)
        axios
          .get(`${API_URL}/api/toplists/${toplistId}`)
          .then((response) => {
            setToplist(response.data);
            setIsLoading(false)});
      }
    
      useEffect(() => {
        getToplist()
      }, [toplistId]);
    
      if(isLoading){
        return <Loading/>
      }

    return(
        <div>
        </div>
    )
}

export default TopListDetailsPage