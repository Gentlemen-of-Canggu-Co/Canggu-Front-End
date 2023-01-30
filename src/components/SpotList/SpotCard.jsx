import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProgressBar from "react-bootstrap/ProgressBar";

function SpotCard(props) {
  const { spots, filteredSpots, spot } = props;

  return (
    <div>
      {spots &&
        spots &&
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Typography variant="h5">{spot.name}</Typography>
                        <Typography variant="body2">
                          <i>{spot.tagline}</i>
                        </Typography>
                      </div>

                      <p
                        style={{
                          fontSize: "2rem",
                          alignContent: "center",
                          width: "30vw",
                          border: "solid",
                          borderRadius: "50%",
                        }}
                      >
                        {spot.overallRating}
                      </p>
                    </div>
                  </Box>
                </Box>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <div style={{ display: "flex" }}>
                      <div style={{ display: "flex", width: "100vw" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            width: "70vw",
                          }}
                        >
                          <ProgressBar
                            className="bg-secondary"
                            style={{ width: "70vw" }}
                            animated={true}
                            now={spot.coffeeRating}
                            label={`Coffee`}
                          />
                          <ProgressBar
                            className="bg-secondary"
                            style={{ width: "70vw" }}
                            animated={true}
                            now={spot.foodRating}
                            label={`Food`}
                          />
                          <ProgressBar
                            className="bg-secondary"
                            style={{ width: "70vw" }}
                            animated={true}
                            now={spot.ambienceRating}
                            label={`Ambience`}
                          />
                        </div>
                        <CardActions style={{ width: "30vw" }}>
                          <Link key={spot._id} to={`/spots/${spot._id}`}>
                            <Button variant="contained">See details</Button>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <Typography variant="h5">{spot.name}</Typography>
                  <Typography variant="body2">
                    <i>{spot.tagline}</i>
                  </Typography>
                </div>

                <p
                  style={{
                    fontSize: "2rem",
                    alignContent: "center",
                    width: "30vw",
                    border: "solid",
                    borderRadius: "50%",
                  }}
                >
                  {spot.overallRating}
                </p>
              </div>
            </Box>
          </Box>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
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
