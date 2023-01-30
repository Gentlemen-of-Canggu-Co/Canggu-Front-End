function Ratings(props){

const {spot} = props

    return(

<div style={{display: "flex", justifyContent: "space-between"}}>

    <div>
        <p>{spot.foodRating}</p>
        <p>Food</p>
    </div>   

    {spot.coffeeRating && 
    <div>
        <p>{spot.coffeeRating}</p>
        <p>Coffee</p> 
    </div> }

    {spot.drinkRating && 
    <div>
        <p>{spot.drinkRating}</p>
        <p>Coffee</p> 
    </div> }

    <div>
        <p>{spot.ambienceRating}</p>
        <p>Ambience</p>   
    </div>  

</div>
    )
}

export default Ratings