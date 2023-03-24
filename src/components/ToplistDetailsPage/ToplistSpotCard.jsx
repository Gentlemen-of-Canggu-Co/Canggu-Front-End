import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../SpotList/spotlist.css"
function ToplistSpotCard (props){
  
const { spotId, spotImage, spotName, spotCoffeeRating, spotFoodRating, spotAmbienceRating} = props
    return(

        <div className="toplistImages">
            <Link to={`/spots/${spotId}`}>
            <Card className="cardSize">
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  sx={{ height: 200 }}
                  component="img"
                  loading="lazy"
                  image={spotImage}
                  title={spotName}
                />
              </Box>
            </Card>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", width: "24vw" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    paddingLeft: "0",
                  }}
                >
                  <ProgressBar
                    className="bg-secondary progressBarSize"
                    animated={true}
                    now={spotCoffeeRating}
                    label={`Coffee`}
                  />
                  <ProgressBar
                    className="bg-secondary progressBarSize"
                    animated={true}
                    now={spotFoodRating}
                    label={`Food`}
                  />
                  <ProgressBar
                    className="bg-secondary progressBarSize"
                    animated={true}
                    now={spotAmbienceRating}
                    label={`Ambience`}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
    
    )
}

export default ToplistSpotCard