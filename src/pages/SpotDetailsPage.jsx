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

<ImgSlider spot={spot}/>
<Overview spot={spot}/>
<Ratings spot={spot}/>
<Pictograms spot={spot}/>
<Menu spot={spot}/>
<Accordion spot={spot}/>
<Map spot={spot}/>
<Description spot={spot}/>
<EventCard spot={spot}/>




{spot.consumables && spot.consumables.map((singleConsumable) =>{
  return  <div>

        <h1>{singleConsumable.name}</h1>

        <img style={{width: "100vw"}} src={singleConsumable.image} alt="singleEventpicture" />

        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <p>{singleConsumable.tagline}</p>
            <p>{singleConsumable.price}k IDR</p>
            <p>{singleConsumable.rating}</p>

        </div>


        </div>
})}
<AddConsumable ownerId={spotId}/>


</div>

  );
}

export default SpotDetailsPage;
