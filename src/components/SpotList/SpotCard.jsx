import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProgressBar from "react-bootstrap/ProgressBar";

function SpotCard(props) {
  const { spots, filteredSpots, spot } = props;
  return (
    <div>
      {spots && 
        filteredSpots.map((spot) => {
          return (
            <div key={spot._id}>
              <Card sx={{ maxWidth: "100vw" }}>
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    sx={{ height: 220 }}
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
                        <Typography component={'div'} variant="h5">{spot.name}</Typography>
                        <Typography component={'div'} variant="body2">
                          <i>{spot.tagline}<span class="badge bg-secondary">{spot.priceLevel}</span></i>
                          <br/>
                          
                        </Typography>
                      </div>

                  </Box>
                </Box>

                <CardContent>
                  <Typography component={'div'} variant="body2" color="text.secondary">
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex", width: "100vw" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            width: "60vw",
                          }}
                        >
                          <ProgressBar
                            className="bg-secondary"
                            style={{ width: "60vw" }}
                            animated={true}
                            now={spot.coffeeRating}
                            label={`Coffee`}
                          />
                          <ProgressBar
                            className="bg-secondary"
                            style={{ width: "60vw" }}
                            animated={true}
                            now={spot.foodRating}
                            label={`Food`}
                          />
                          <ProgressBar
                            className="bg-secondary"
                            style={{ width: "60vw" }}
                            animated={true}
                            now={spot.ambienceRating}
                            label={`Ambience`}
                          />
                        </div>
                        <CardActions>
                          <Link key={spot._id} to={`/spots/${spot._id}`}>
                          </Link>
                        </CardActions>
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}

      {spot && (
        <Card sx={{ maxWidth: "100vw" }}>
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
                        <Typography component={'div'} variant="h5">{spot.name}</Typography>
                        <Typography component={'div'} variant="body2">
                          <i>{spot.tagline}</i>
                        </Typography>
                      </div>
            </Box>
          </Box>

          <CardContent>
            <Typography component={'div'} variant="body2" color="text.secondary">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  width: "100vw",
                }}
              >
                <ProgressBar
                  className="bg-secondary"
                  style={{ width: "90vw", marginBottom: "5px" }}
                  animated={true}
                  now={spot.coffeeRating}
                  label={`Coffee`}
                />
                <ProgressBar
                  className="bg-secondary"
                  style={{ width: "90vw", marginBottom: "5px" }}
                  animated={true}
                  now={spot.foodRating}
                  label={`Food`}
                />
                <ProgressBar
                  className="bg-secondary"
                  style={{ width: "90vw" }}
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
