import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import "../SpotList/spotlist.css"
import { Typography } from "@mui/material";

function ToplistConsumableCard(props) {

const {consumableImage, consumableTitle, consumableRating, consumablePrice, consumableTagline, spotName} = props

    return <div>

<Typography
            component={"div"}
            sx={{ fontFamily: "Teko", fontSize: "30px" }}
          >
            This is what I had at {spotName}
          </Typography>


<Card className="toplistImages">
            <Box sx={{ position: "relative" }}>
              <CardMedia
                sx={{ height: 220 }}
                image={consumableImage}
                title={consumableTitle}
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
                    <Typography component={"div"} variant="h5">
                      {consumableTitle}
                    </Typography>
                    <Typography component={"div"} variant="body2">
                      {consumableTagline}
                    </Typography>
                  </div>
                  <Typography
                    component={"div"}
                    className="badge bg-secondary"
                    style={{ margin: "5px" }}
                  >
                    Price<br></br>
                    {consumablePrice}k
                  </Typography>

                  {consumableRating > 79 && (
                    <Typography className="badge bg-success">
                      Score <br></br>
                      {consumableRating}
                    </Typography>
                  )}

                  {consumableRating > 59 &&
                    consumableRating < 80 && (
                      <Typography className="badge bg-warning">
                        Score <br></br>
                        {consumableRating}
                      </Typography>
                    )}

                  {consumableRating < 60 && (
                    <Typography className="badge bg-danger">
                      Score <br></br>
                      {consumableRating}
                    </Typography>
                  )}
                </div>
              </Box>
            </Box>
          </Card>

    </div>
}

export default ToplistConsumableCard