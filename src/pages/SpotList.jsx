import { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import SliderFilter from "../components/SpotList/SliderFilter";
import SpotCard from "../components/SpotList/SpotCard";
import { AuthContext } from "../context/auth.context";
import "../App.css"
import Loading from "../components/Loading/Loading";
import Footer from "./Footer";
import { Helmet } from 'react-helmet';



function SpotList() {
  const [spots, setSpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     axios.get(`${API_URL}/api/spots`)
//         .then((response) => {
//             const filteredByRatings = response.data.sort((a,b) => b.overallRating - a.overallRating)
//             setSpots(filteredByRatings)
//             setFilteredSpots(filteredByRatings)
//         })
// }, [])



const getSpots = () => {
  setIsLoading(true)
  axios.get(`${API_URL}/api/spots`)
  .then((response) => {
      const filteredByRatings = response.data.sort((a,b) => b.overallRating - a.overallRating)
      setSpots(filteredByRatings)
      setFilteredSpots(filteredByRatings)
      setIsLoading(false)});
}


useEffect(() => {
  getSpots()
}, []);

if(isLoading){
  return <Loading/>
}





  return (
    <div className="footerWrap">
              <Helmet>
        <title>Cafés & Restaurants | Chunks of Canggu</title>
        <meta name="description" content="Find your perfect Cafe in Canggu. With images, reviews, filter options and more." />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
    <div>
      {/* <Breadcrumbs spots={spots} /> */}

      <h1 className="spotlist-headline">Cafes & Restaurants in Canggu</h1>
      <p className="spotlist-p">Find your perfect spot, based on what matters to you.</p>
      <div>
        <SliderFilter spots={spots} setFilteredSpots={setFilteredSpots} />
      </div>
      <SpotCard spots={spots} filteredSpots={filteredSpots} />
      {isLoggedIn && (
                    <Link to={`/spots/create`}>
                    <button type="button" className="btn btn-success" style={{margin: '10px'}}>Add new Spot</button>
                    </Link>   
            )}
      <h2>What makes the Cafes and Restaurants in Canggu special?</h2>
      <p>
        Among a plethora of reasons, Food is one of the main staples that made Canggu one of the largest digital nomad destinations in the world. From cheap traditional indonesion food and no-nonsense eateries to high-end western cuisine and astonishing Cafés, you will have no trouble finding the dish you are craving. Or let me revise that: If you patiently search through the seemingly endless amount of places to go to, you will avoid those that are just shiny on the outside and actually find the best Cafes and Restaurants in Canggu. To make your life easier, Chunks of Canggu lists all the places that I have visited and ranks them for the quality of their food and coffee as well as their ambience. This way, you are just a quick search removed to find the perfect Cafe or Restaurant that excels at just the thing you are craving.  
      </p>
    </div>


    <div><Footer /></div>
    </div>
  );
}

export default SpotList;
