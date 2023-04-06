import { useState } from "react";

function MultipleFilters(props) {
  const { setFilteredSpots, filteredSpots, spots } = props;

  const [ambienceButton, setAmbienceButton] = useState(false);
  const [foodButton, setFoodButton] = useState(false);
  const [coffeeButton, setCoffeeButton] = useState(false);
  const [veganButton, setVeganButton] = useState(false);
  const [dateButton, setDateButton] = useState(false);
  const [localButton, setLocalButton] = useState(false);
  const [coworkingButton, setCoworkingButton] = useState(false);

  const applyFilterSelection = () => {

let filteredList = spots

    if (ambienceButton) {
      filteredList = spots.filter((spot) => {
        return spot.ambienceRating > 79;
      });
      setFilteredSpots(filteredList);
    }

    if (foodButton) {
      filteredList = spots.filter((spot) => {
        return spot.foodRating > 79;
      });
      setFilteredSpots(filteredList);
    }

    if (coffeeButton) {
      filteredList = spots.filter((spot) => {
        return spot.coffeeRating > 79;
      });
      setFilteredSpots(filteredList);
    }

    if (veganButton) {
      filteredList = spots.filter((spot) => {
        return spot.veganFriendly;
      });
      setFilteredSpots(filteredList);
    }

    if (dateButton) {
      filteredList = spots.filter((spot) => {
        return spot.dateFriendly;
      });
      setFilteredSpots(filteredList);
    }

    if (coworkingButton) {
      filteredList = spots.filter((spot) => {
        return spot.coWorkingFriendly;
      });
      setFilteredSpots(filteredList);
    }

    if (localButton) {
      filteredList = spots.filter((spot) => {
        return spot.locallyOwned;
      });
      setFilteredSpots(filteredList);
    }
  };

  const switchAmbienceButton = async (e) => {
    e.preventDefault();

    if (ambienceButton) {
      setAmbienceButton(false);
      await applyFilterSelection();
    } else if (!ambienceButton) {
      setAmbienceButton(true);
      await applyFilterSelection();
    }
  };

  const switchFoodButton = (e) => {
    e.preventDefault();

    if (foodButton) {
      setFoodButton(false);
      applyFilterSelection();
    } else {
      setFoodButton(true);
      applyFilterSelection();
    }
  };

  const switchCoffeeButton = (e) => {
    e.preventDefault();

    if (coffeeButton) {
      setCoffeeButton(false);
      applyFilterSelection();
    } else {
      setCoffeeButton(true);
      applyFilterSelection();
    }
  };

  const switchVeganButton = (e) => {
    e.preventDefault();

    if (veganButton) {
      setVeganButton(false);
      applyFilterSelection();
    } else {
      setVeganButton(true);
      applyFilterSelection();
    }
  };

  const switchDateButton = (e) => {
    e.preventDefault();

    if (dateButton) {
      setDateButton(false);
      applyFilterSelection();
    } else {
      setDateButton(true);
      applyFilterSelection();
    }
  };

  const switchLocalButton = (e) => {
    e.preventDefault();

    if (localButton) {
      setLocalButton(false);
      applyFilterSelection();
    } else {
      setLocalButton(true);
      applyFilterSelection();
    }
  };

  const switchCoworkingButton = (e) => {
    e.preventDefault();

    if (coworkingButton) {
      setCoworkingButton(false);
      applyFilterSelection();
    } else {
      setCoworkingButton(true);
      applyFilterSelection();
    }
  };

  return (
    <div>
      <form onClick={switchAmbienceButton}>
        <button
          type="button"
          className={ambienceButton ? "spotlistActiveBtton" : ""}
        >
          Great Ambience{" "}
        </button>
      </form>

      <form onClick={switchFoodButton}>
        <button
          type="button"
          className={foodButton ? "spotlistActiveBtton" : ""}
        >
          Great Food{" "}
        </button>
      </form>
      <form onClick={switchCoffeeButton}>
        <button
          type="button"
          className={coffeeButton ? "spotlistActiveBtton" : ""}
        >
          Great Coffee{" "}
        </button>
      </form>
      <form onClick={switchVeganButton}>
        <button
          type="button"
          className={veganButton ? "spotlistActiveBtton" : ""}
        >
          Vegan Friendly{" "}
        </button>
      </form>
      <form onClick={switchDateButton}>
        <button
          type="button"
          className={dateButton ? "spotlistActiveBtton" : ""}
        >
          Date Friendly{" "}
        </button>
      </form>
      <form onClick={switchLocalButton}>
        <button
          type="button"
          className={localButton ? "spotlistActiveBtton" : ""}
        >
          Locally owned{" "}
        </button>
      </form>
      <form onClick={switchCoworkingButton}>
        <button
          type="button"
          className={coworkingButton ? "spotlistActiveBtton" : ""}
        >
          Coworking{" "}
        </button>
      </form>
    </div>
  );
}

export default MultipleFilters;
