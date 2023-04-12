import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddSpot() {
  const [type, setType] = useState([]);
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [location, setLocation] = useState("");
  const [openingTimes, setOpeningTimes] = useState("");
  const [menuImage, setMenuImage] = useState("");
  const [spotImage, setSpotImage] = useState("");
  const [priceLevel, setPriceLevel] = useState("");
  const [description, setDescription] = useState("");
  const [overallRating, setOverallRating] = useState("");
  const [coffeeRating, setCoffeeRating] = useState("");
  const [drinkRating, setDrinkRating] = useState("");
  const [foodRating, setFoodRating] = useState("");
  const [ambienceRating, setAmbienceRating] = useState("");
  const [veganFriendly, setVeganFriendly] = useState(false);
  const [hasPool, setHasPool] = useState(false);
  const [coWorkingFriendly, setCoWorkingFriendly] = useState(false);
  const [dateFriendly, setDateFriendly] = useState(false);
  const [outsideSeating, setOutsideSeating] = useState(false);
  const [wifiSpeed, setWifiSpeed] = useState(false);
  const [hasSockets, setHasSockets] = useState(false);
  const [locallyOwned, setLocallyOwned] = useState(false);
  const consumables = [{}];
  const events = [{}];
  const [meal1, setMeal1] = useState("");
  const [meal2, setMeal2] = useState("");
  const [meal3, setMeal3] = useState("");
  const [meal4, setMeal4] = useState("");
  const [meal5, setMeal5] = useState("");
  const [meal6, setMeal6] = useState("");
  const [cuisine1, setCuisine1] = useState("");
  const [cuisine2, setCuisine2] = useState("");
  const [cuisine3, setCuisine3] = useState("");
  const [cuisine4, setCuisine4] = useState("");
  const [cuisine5, setCuisine5] = useState("");
  const [cuisine6, setCuisine6] = useState("");

  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const pics = [];

  useEffect(() => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dya5f34qe",
        uploadPreset: "uw_test"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          pics.push(result.info.secure_url);
          setSpotImage(pics[0]);
          setMenuImage(pics[1])
        }
      }
    );
    
    document.getElementById("upload_widget1").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
    document.getElementById("upload_widget2").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );

    document.getElementById("upload_widget1").addEventListener("click", (event) => {
      event.preventDefault()
    });
    document.getElementById("upload_widget2").addEventListener("click", (event) => {
      event.preventDefault()
    })  
    
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const meal = [];

    if (meal1 !== "") {
      meal.push(meal1);
    }

    if (meal2 !== "") {
      meal.push(meal2);
    }

    if (meal3 !== "") {
      meal.push(meal3);
    }

    if (meal4 !== "") {
      meal.push(meal4);
    }

    if (meal5 !== "") {
      meal.push(meal5);
    }

    if (meal6 !== "") {
      meal.push(meal6);
    }


    const cuisine = [];

    if (cuisine1 !== "") {
      cuisine.push(cuisine1);
    }

    if (cuisine2 !== "") {
      cuisine.push(cuisine2);
    }

    if (cuisine3 !== "") {
      cuisine.push(cuisine3);
    }

    if (cuisine4 !== "") {
      cuisine.push(cuisine4);
    }

    if (cuisine5 !== "") {
      cuisine.push(cuisine5);
    }

    if (cuisine6 !== "") {
      cuisine.push(cuisine6);
    }





    const newSpot = {
      type,
      meal,
      cuisine,
      name,
      tagline,
      location,
      openingTimes,
      menuImage,
      spotImage,
      priceLevel,
      description,
      overallRating,
      coffeeRating,
      drinkRating,
      foodRating,
      ambienceRating,
      veganFriendly,
      hasPool,
      coWorkingFriendly,
      dateFriendly,
      outsideSeating,
      wifiSpeed,
      hasSockets,
      locallyOwned,
      events,
      consumables,
    };
    axios.post(`${API_URL}/api/spots`, newSpot).then((response) => {
      console.log('this is a string', response.data);
      navigate(`/spots/${response.data._id}`);
    });

  };

  return (
    <div>
      <div>
        <h3>Add new Spot</h3>
        <form onSubmit={handleSubmit}>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <div>
          <label>Type of Spot</label>
          <input
            type="text"
            name="type"
            value={type}
            required
            onChange={(event) => setType(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Name of Spot</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            required
            onChange={(event) => setTagline(event.target.value)}
          />
                    <br />
          <label style={{fontFamily: "Teko"}}>priceLevel</label>
          <input
            type="text"
            name="priceLevel"
            value={priceLevel}
            required
            onChange={(event) => setPriceLevel(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Overall Ratign</label>
          <input
            type="number"
            name="overallRating"
            value={overallRating}
            onChange={(event) => setOverallRating(Number(event.target.value))}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Coffee Rating</label>
          <input
            type="number"
            name="coffeeRating"
            value={coffeeRating}
            onChange={(event) => setCoffeeRating(Number(event.target.value))}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Drink Rating</label>
          <input
            type="number"
            name="drinkRating"
            value={drinkRating}
            onChange={(event) => setDrinkRating(Number(event.target.value))}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Food Rating</label>
          <input
            type="number"
            name="foodRating"
            value={foodRating}
            onChange={(event) => setFoodRating(Number(event.target.value))}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Ambience Rating</label>
          <input
            type="number"
            name="ambienceRating"
            value={ambienceRating}
            onChange={(event) => setAmbienceRating(Number(event.target.value))}
          />
          </div>

          <div>
          <br />
          <label style={{fontFamily: "Teko"}}>Type of Meal 1</label>
          <input
            type="text"
            name="meal1"
            value={meal1}
            onChange={(event) => setMeal1(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Type of Meal 2</label>
          <input
            type="text"
            name="meal2"
            value={meal2}
            onChange={(event) => setMeal2(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Type of Meal 3</label>
          <input
            type="text"
            name="meal3"
            value={meal3}
            onChange={(event) => setMeal3(event.target.value)}
          />

          <br />
          <label style={{fontFamily: "Teko"}}>Type of Meal 4</label>
          <input
            type="text"
            name="meal4"
            value={meal4}
            onChange={(event) => setMeal4(event.target.value)}
          />
          {/* <br />
          <label style={{fontFamily: "Teko"}}>Type of Meal 5</label>
          <input
            type="text"
            name="meal5"
            value={meal5}
            onChange={(event) => setMeal5(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Type of Meal 6</label>
          <input
            type="text"
            name="meal6"
            value={meal6}
            onChange={(event) => setMeal6(event.target.value)}
          /> */}


<br />
          <label style={{fontFamily: "Teko"}}>Type of cuisine 1</label>
          <input
            type="text"
            name="cuisine1"
            value={cuisine1}
            onChange={(event) => setCuisine1(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Type of cuisine 2</label>
          <input
            type="text"
            name="cuisine2"
            value={cuisine2}
            onChange={(event) => setCuisine2(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Type of cuisine 3</label>
          <input
            type="text"
            name="cuisine3"
            value={cuisine3}
            onChange={(event) => setCuisine3(event.target.value)}
          />
          <br />

          <label style={{fontFamily: "Teko"}}>Type of cuisine 4</label>
          <input
            type="text"
            name="cuisine4"
            value={cuisine4}
            onChange={(event) => setCuisine4(event.target.value)}
          />
          {/* <br />
          <label style={{fontFamily: "Teko"}}>Type of cuisine 5</label>
          <input
            type="text"
            name="cuisine5"
            value={cuisine5}
            onChange={(event) => setCuisine5(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Type of cuisine 6</label>
          <input
            type="text"
            name="cuisine6"
            value={cuisine6}
            onChange={(event) => setCuisine6(event.target.value)}
          /> */}

</div>
<div>
          
          {/* <br />
          <label style={{fontFamily: "Teko"}}>Maps Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Opening Times</label>
          <input
            type="text"
            name="openingTimes"
            value={openingTimes}
            onChange={(event) => setOpeningTimes(event.target.value)}
          /> */}
 

          <br />

          
    
          <label style={{fontFamily: "Teko"}}>Is it vegan friendly?</label>
          <input
            type="checkbox"
            name="veganFriendly"
            value={veganFriendly}
            onChange={(event) => setVeganFriendly(event.target.checked)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Does it have a pool?</label>
          <input
            type="checkbox"
            name="hasPool"
            value={hasPool}
            onChange={(event) => setHasPool(event.target.checked)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Is it Coworking friendly?</label>
          <input
            type="checkbox"
            name="coWorkingFriendly"
            value={coWorkingFriendly}
            onChange={(event) => setCoWorkingFriendly(event.target.checked)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Is it suited for Dates?</label>
          <input
            type="checkbox"
            name="dateFriendly"
            value={dateFriendly}
            onChange={(event) => setDateFriendly(event.target.checked)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Does it have outside Seating?</label>
          <input
            type="checkbox"
            name="outsideSeating"
            value={outsideSeating}
            onChange={(event) => setOutsideSeating(event.target.checked)}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>How fast is the Wifi?</label>
          <input
            type="number"
            name="wifiSpeed"
            value={wifiSpeed}
            onChange={(event) => setWifiSpeed(Number(event.target.value))}
          />
          <br />
          <label style={{fontFamily: "Teko"}}>Are sockets available?</label>
          <input
            type="checkbox"
            name="hasSockets"
            value={hasSockets}
            onChange={(event) => setHasSockets(event.target.checked)}
          />
          <br />

          <label style={{fontFamily: "Teko"}}>Is it locally owned?</label>
          <input
            type="checkbox"
            name="locallyOwned"
            value={locallyOwned}
            onChange={(event) => setLocallyOwned(event.target.checked)}
          />
          <br />
          <button id="upload_widget1" className="cloudinary-button">
            Upload Spot Image
          </button>
          <br />
          <button style={{marginTop:"10px"}} id="upload_widget2" className="cloudinary-button">
            Upload Menu image
          </button>
</div>
</div>
          <label style={{fontFamily: "Teko"}}>description</label>
          <textarea
            type="text"
            rows="10"
            cols="100"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <br></br>
          <button type="submit" className="btn btn-success">Add new Spot</button>
        </form>
      </div>
    </div>
  );
}

export default AddSpot;
