// import { useState } from "react"

// function MultipleFilters(props){

//     const { setFilteredSpots,filteredSpots, spots } = props;
//     const [ambienceButton, setAmbienceButton] = useState(false)
//     const [foodButton, setFoodButton] = useState(false)
//     const [coffeeButton, setCoffeeButton] = useState(false)


//     const [activeButton, setActiveButton] = useState(null);
//     const [ambienceActiveButton, setAmbienceActiveButton] = useState(null);
//     const [foodActiveButton, setFoodActiveButton] = useState(null);
//     const [coffeeActiveButton, setCoffeeActiveButton] = useState(null);
//     const [veganActiveButton, setVeganActiveButton] = useState(null);
//     const [dateActiveButton, setDateActiveButton] = useState(null);
//     const [locallyOwnedActiveButton, setLocallyOwnedActiveButton] = useState(null);
//     const [coworkingActiveButton, setCoworkingActiveButton] = useState(null);

// const buttonTracker = {
//     veganButton: false,
//     dateButton: false,
//     locallyOwnedButton: false,
//     coworkingButton: false, 
//     ambienceButton: false,
//     coffeeButton: false,
//     foodButton: false
// }
    

//   const applyFilterSelection = (selectedButton) => {
//     console.log(`Button ${selectedButton} was clicked.`);
//     // Add your filter selection logic here
//     selectedButton.preventDefault();

//     const filteredList = spots.filter(
//       (spot) =>
//         spot.coffeeRating > 80
//     );

//     setFilteredSpots(filteredList);
//   };

//   const handleAmbienceButtonClick = (e) => {
//     if (ambienceButton === buttonNumber) {
//       setActiveButton(null);
//     } else {
//       setActiveButton(buttonNumber);
//     }
//   };

//   const handleButtonClick = (buttonNumber) => {
//     if (activeButton === buttonNumber) {
//       setActiveButton(null);
//     } else {
//       setActiveButton(buttonNumber);
//     }
//   };

//   const handleButtonClick = (buttonNumber) => {
//     if (activeButton === buttonNumber) {
//       setActiveButton(null);
//     } else {
//       setActiveButton(buttonNumber);
//     }
//   };

//   const handleButtonClick = (buttonNumber) => {
//     if (activeButton === buttonNumber) {
//       setActiveButton(null);
//     } else {
//       setActiveButton(buttonNumber);
//     }
//   };

//   const handleButtonClick = (buttonNumber) => {
//     if (activeButton === buttonNumber) {
//       setActiveButton(null);
//     } else {
//       setActiveButton(buttonNumber);
//     }
//   };

//   const handleButtonClick = (buttonNumber) => {
//     if (activeButton === buttonNumber) {
//       setActiveButton(null);
//     } else {
//       setActiveButton(buttonNumber);
//     }
//   };

//   const handleButtonClick = (buttonNumber) => {
//     if (activeButton === buttonNumber) {
//       setActiveButton(null);
//     } else {
//       setActiveButton(buttonNumber);
//     }
//   };

//   return (
//     <div>
//       <form onClick={applyFilterSelection}>
//         <button
//           type="button"
//           onClick={() => handleButtonClick(1)}
//           className={activeButton === 1 ? 'active' : ''}
//         >
// Great Ambience        </button>
//       </form>
//       <form>
//         <button
//           type="button"
//           onClick={() => handleButtonClick(2)}
//           className={activeButton === 2 ? 'active' : ''}
//         >
// Great Food        </button>
//       </form>
//       <form>
//         <button
//           type="button"
//           onClick={() => handleButtonClick(3)}
//           className={activeButton === 3 ? 'active' : ''}
//         >
// Great Coffee        </button>
//       </form>
//       <form>
//         <button
//           type="button"
//           onClick={() => handleButtonClick(4)}
//           className={activeButton === 4 ? 'active' : ''}
//         >
// Vegan Friendly        </button>
//       </form>
//       <form>
//         <button
//           type="button"
//           onClick={() => handleButtonClick(5)}
//           className={activeButton === 5 ? 'active' : ''}
//         >
// Date Friendly        </button>
//       </form>
//       <form>
//         <button
//           type="button"
//           onClick={() => handleButtonClick(6)}
//           className={activeButton === 6 ? 'active' : ''}
//         >
// Locally owned        </button>
//       </form>
//       <form>
//         <button
//           type="button"
//           onClick={() => handleButtonClick(7)}
//           className={activeButton === 7 ? 'active' : ''}
//         >
// Coworking        </button>
//       </form>
//     </div>
//   );
  
// }

// export default MultipleFilters