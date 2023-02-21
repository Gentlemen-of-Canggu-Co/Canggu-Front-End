import { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import SliderFilter from "../components/SpotList/SliderFilter";
import SpotCard from "../components/SpotList/SpotCard";
import { AuthContext } from "../context/auth.context";


function SpotList() {
  const [spots, setSpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const { isLoggedIn } = useContext(AuthContext);


  // useEffect(() => {
  //   axios.get(`${API_URL}/api/spots`).then((response) => {
  //     setSpots(response.data);
  //     setFilteredSpots(response.data);
  //   });
  // }, []);

  useEffect(() => {
    axios.get(`${API_URL}/api/spots`)
        .then((response) => {
            const filteredByRatings = response.data.sort((a,b) => b.overallRating - a.overallRating)
            setSpots(filteredByRatings)
            setFilteredSpots(filteredByRatings)
        })
}, [])




  return (
    <div>
      {/* <Breadcrumbs spots={spots} /> */}

      <h1 className="spotlist-headline">Spots in Canggu</h1>
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
      <h2>SEO: About Cafes and Restaurants in Canggu</h2>
      <p>
        A coffeehouse, coffee shop, or café is an establishment that primarily
        serves coffee of various types, notably espresso, latte, and cappuccino.
        Some coffeehouses may serve cold drinks, such as iced coffee and iced
        tea, as well as other non-caffeinated beverages. In continental Europe,
        cafés serve alcoholic drinks. A coffeehouse may also serve food, such as
        light snacks, sandwiches, muffins, fruit, or pastries. Coffeehouses
        range from owner-operated small businesses to large multinational
        corporations. Some coffeehouse chains operate on a franchise business
        model, with numerous branches across various countries around the world.
      </p>
    </div>
  );
}

export default SpotList;
