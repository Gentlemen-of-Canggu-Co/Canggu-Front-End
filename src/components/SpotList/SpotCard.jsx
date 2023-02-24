import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./spotlist.css"

function SpotCard(props) {
  const { spots, filteredSpots, spot } = props;
  return (
    <div className="spotlistCardWrap">
      {spots &&
        filteredSpots.map((spot) => {
          return (
            <div key={spot._id} style={{padding:"5px 3px"}}>
              <Link key={spot._id} to={`/spots/${spot._id}`}>
                <Card className="cardSize" >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      image={spot.spotImage}
                      title="green iguana"
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.14)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <Typography component={"div"} variant="h5" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                          {spot.name}
                        </Typography>
                        <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                          <i>{spot.tagline}</i>
                          <span className="badge bg-success" style={{margin: '5px'}}>{spot.priceLevel}</span>
                          <span>
                          <CardContent>
                    <Typography
                      component={"div"}
                      variant="body2"
                      color="text.secondary"
                    >
                      
                    </Typography>
                  </CardContent>
                          </span>
                        </Typography>
                        
                      </div>
                    </Box>
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
                              now={spot.coffeeRating}
                              label={`Coffee`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={spot.foodRating}
                              label={`Food`}
                            />
                            <ProgressBar
                              className="bg-secondary progressBarSize"
                              animated={true}
                              now={spot.ambienceRating}
                              label={`Ambience`}
                            />
                          </div>
                        </div>
                      </div>
              </Link>
            </div>
          );
        })}

      {spot && (
        <Card className="sdpImgSize">
          <Box sx={{ position: "relative" }}>
            <CardMedia
              sx={{ height: 400 }}
              image={spot.spotImage}
              title="green iguana"
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0, 0, 0, 0.54)",
                color: "white",
                padding: "10px",
              }}
            >
              <div>
                <Typography component={"div"} variant="h5" sx={{ fontFamily: 'Teko', fontSize: "30px" }}>
                  {spot.name}
                </Typography>
                <Typography component={"div"} variant="body2" sx={{ fontFamily: 'Montserrat', fontSize: "15px" }}>
                  <i>{spot.tagline}</i>
                </Typography>
              </div>
            </Box>
          </Box>

          <CardContent>
            <Typography
              component={"div"}
              variant="body2"
              color="text.secondary"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  width: "100vw",
                }}
              >
                <ProgressBar
                  className="bg-secondary progressBarWidth"
                  animated={true}
                  now={spot.coffeeRating}
                  label={`Coffee`}
                />
                <ProgressBar
                  className="bg-secondary progressBarWidth"
                  animated={true}
                  now={spot.foodRating}
                  label={`Food`}
                />
                <ProgressBar
                  className="bg-secondary progressBarWidth"
                  animated={true}
                  now={spot.ambienceRating}
                  label={`Ambience`}
                />
              </div>
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default SpotCard;
