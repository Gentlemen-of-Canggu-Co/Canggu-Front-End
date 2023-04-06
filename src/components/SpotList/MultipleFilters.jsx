import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

function MultipleFilters(props) {
  const { setFilteredSpots, filteredSpots, spots } = props;

  const [filters, setFilters] = useState({
    ambience: false,
    food: false,
    coffee: false,
    vegan: false,
    date: false,
    local: false,
    coworking: false,
  });

  useEffect(() => {
    let filteredList = spots;

    if (filters.ambience) {
      filteredList = filteredList.filter((spot) => spot.ambienceRating > 79);
    }

    if (filters.food) {
      filteredList = filteredList.filter((spot) => spot.foodRating > 79);
    }

    if (filters.coffee) {
      filteredList = filteredList.filter((spot) => spot.coffeeRating > 79);
    }

    if (filters.vegan) {
      filteredList = filteredList.filter((spot) => spot.veganFriendly);
    }

    if (filters.date) {
      filteredList = filteredList.filter((spot) => spot.dateFriendly);
    }

    if (filters.local) {
      filteredList = filteredList.filter((spot) => spot.locallyOwned);
    }

    if (filters.coworking) {
      filteredList = filteredList.filter((spot) => spot.coWorkingFriendly);
    }

    setFilteredSpots(filteredList);
  }, [filters, setFilteredSpots, spots]);

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <div>
      {/* <Accordion style={{ margin: "20px"}}>

<AccordionSummary style={{ backgroundColor: "black" }}
          expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontFamily: "Teko",
              fontSize: "20px",
              color: "white"
            }}
          >
            Filter results
          </Typography>
        </AccordionSummary> */}

<div>
      <button
        type="button"
        className={filters.ambience ? "active spotlistButtons" : "inactive spotlistButtons"}
        onClick={() => handleFilterChange("ambience")}
      >
        Great Ambience
      </button>

      <button
        type="button"
        className={filters.food ? "active spotlistButtons" : "inactive spotlistButtons"}
        onClick={() => handleFilterChange("food")}
      >
        Great Food
      </button>

      <button
        type="button"
        className={filters.coffee ? "active spotlistButtons" : "inactive spotlistButtons"}
        onClick={() => handleFilterChange("coffee")}
      >
        Great Coffee
      </button>

      <button
        type="button"
        className={filters.vegan ? "active spotlistButtons" : "inactive spotlistButtons"}
        onClick={() => handleFilterChange("vegan")}
      >
        Vegan Friendly
      </button>

      <button
        type="button"
        className={filters.date ? "active spotlistButtons" : "inactive spotlistButtons"}
        onClick={() => handleFilterChange("date")}
      >
        Date Friendly
      </button>

      <button
        type="button"
        className={filters.coworking ? "active spotlistButtons" : "inactive spotlistButtons"}
        onClick={() => handleFilterChange("coworking")}
      >
        Coworking
      </button>

      <button
        type="button"
        className={filters.local ? "active spotlistButtons" : "inactive spotlistButtons"}
        onClick={() => handleFilterChange("local")}
      >
Locally owned      </button>
</div>
<div>
{filteredSpots < spots && <Typography component={"div"} variant="h5" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
{filteredSpots.length} Spots fit your selection.
                </Typography>}
</div>
{/* // </Accordion> */}
</div>)}

export default MultipleFilters