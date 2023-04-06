import { useState, useEffect } from "react";

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
      <button
        type="button"
        className={filters.ambience ? "spotlistActiveBtton" : ""}
        onClick={() => handleFilterChange("ambience")}
      >
        Great Ambience
      </button>

      <button
        type="button"
        className={filters.food ? "spotlistActiveBtton" : ""}
        onClick={() => handleFilterChange("food")}
      >
        Great Food
      </button>

      <button
        type="button"
        className={filters.coffee ? "spotlistActiveBtton" : ""}
        onClick={() => handleFilterChange("coffee")}
      >
        Great Coffee
      </button>

      <button
        type="button"
        className={filters.vegan ? "spotlistActiveBtton" : ""}
        onClick={() => handleFilterChange("vegan")}
      >
        Vegan Friendly
      </button>

      <button
        type="button"
        className={filters.date ? "spotlistActiveBtton" : ""}
        onClick={() => handleFilterChange("date")}
      >
        Date Friendly
      </button>

      <button
        type="button"
        className={filters.coworking ? "spotlistActiveBtton" : ""}
        onClick={() => handleFilterChange("coworking")}
      >
        Coworking
      </button>

      <button
        type="button"
        className={filters.local ? "spotlistActiveBtton" : ""}
        onClick={() => handleFilterChange("local")}
      >
Locally owned      </button>
</div>)}

export default MultipleFilters

     

