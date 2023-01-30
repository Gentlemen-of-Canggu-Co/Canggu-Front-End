import { useState, useEffect } from "react";
import axios from "axios";
import AddConsumable from "../components/SpotDetailsPage/AddConsumable";
import { useParams } from "react-router-dom";
import ImgSlider from "../components/SpotDetailsPage/ImgSlider";
import Overview from "../components/SpotDetailsPage/Overview";
import Ratings from "../components/SpotDetailsPage/Ratings";
import Pictograms from "../components/SpotDetailsPage/Pictograms";
import Menu from "../components/SpotDetailsPage/Menu";
import Accordion from "../components/SpotDetailsPage/Accordion";
import Map from "../components/SpotDetailsPage/Map";
import Description from "../components/SpotDetailsPage/Description";
import EventCard from "../components/SpotDetailsPage/EventCard";
import SpotCard from "../components/SpotList/SpotCard";
import ConsumableCard from "../components/SpotDetailsPage/ConsumableCard";

function SpotDetailsPage() {
const API_URL= "http://localhost:5005"
const {spotId} = useParams()
const [spot, setSpot] = useState({})

useEffect(() => {
  axios.get(`${API_URL}/api/spots/${spotId}`)
    .then(response => setSpot(response.data))
}, [spotId])
  return (

<div>

<SpotCard spot={spot} />
<Pictograms spot={spot}/>
<Menu spot={spot}/>
<ConsumableCard spot={spot}/>
<Description spot={spot}/>
<EventCard spot={spot}/>

<Accordion spot={spot}/>
<Map spot={spot}/>





      <AddConsumable ownerId={spotId} />
      
      
    </div>
    
  );
}

export default SpotDetailsPage;
