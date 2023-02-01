import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function EventCard(props) {
  const { spot, events, event } = props;
  return (
    <div>
      {spot && !event && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h2>Events</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {spot.events &&
                spot.events.map((singleEvent) => {
                  return (
                    <div key={singleEvent._id}>
                      <Card sx={{ maxWidth: "100vw" }}>
                        <Box sx={{ position: "relative" }}>
                          <CardMedia
                            sx={{ height: 220 }}
                            image={singleEvent.eventImage}
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
                                <Typography variant="h5">
                                  {singleEvent.name}
                                </Typography>
                                {singleEvent.price && (
                                  <Typography variant="body2">
                                    {singleEvent.startDate} |{" "}
                                    {singleEvent.startTime} |{" "}
                                    {singleEvent.price}k{" "}
                                  </Typography>
                                )}
                                {!singleEvent.price && (
                                  <Typography variant="body2">
                                    {singleEvent.startDate} |{" "}
                                    {singleEvent.startTime} | Free{" "}
                                  </Typography>
                                )}
                              </div>

                              <CardActions style={{ width: "20vw" }}>
                                <Link
                                  key={singleEvent._id}
                                  to={`/events/${singleEvent._id}`}
                                >
                                  <Button variant="contained">
                                    See details
                                  </Button>
                                </Link>
                              </CardActions>
                            </div>
                          </Box>
                        </Box>
                      </Card>
                    </div>
                  );
                })}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}

      {events &&
        events.map((event) => {
          return (
            <div key={event._id}>
              <Card sx={{ maxWidth: "100vw" }}>
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    sx={{ height: 220 }}
                    image={event.eventImage}
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
                        <Typography variant="h5">{event.name}</Typography>
                        {event.price && (
                          <Typography variant="body2">
                            {event.startDate} | {event.startTime} |{" "}
                            {event.price}k{" "}
                          </Typography>
                        )}
                        {!event.price && (
                          <Typography variant="body2">
                            {event.startDate} | {event.startTime} | Free{" "}
                          </Typography>
                        )}{" "}
                      </div>

                      <CardActions style={{ width: "20vw" }}>
                        <Link key={event._id} to={`/events/${event._id}`}>
                          <Button variant="contained">See details</Button>
                        </Link>
                      </CardActions>
                    </div>
                  </Box>
                </Box>
              </Card>
            </div>
          );
        })}

      {event && (
        <div>
          <Card sx={{ maxWidth: "100vw" }}>
            <Box sx={{ position: "relative" }}>
              <CardMedia
                sx={{ height: 400 }}
                image={event.eventImage}
                title="green iguana"
              />

              {/* <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.54)",
                  color: "white",
                  padding: "10px",
                }}
              > */}
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                > */}
                  {/* <div> */}
                    {/* <Typography variant="h5">
                      {event.name} @ {spot.name}
                    </Typography> */}
                    {/* {event.price && (
                      <Typography variant="body2">
                        {event.startDate} | {event.startTime} | {event.price}k
                      </Typography>
                    )}
                    {!event.price && (
                      <Typography variant="body2">
                        {event.startDate} | {event.startTime} | Free
                      </Typography>
                    )} */}
                  {/* </div> */}
                {/* </div> */}
              </Box>
            {/* </Box> */}
          </Card>
        </div>
      )}
    </div>
  );
}

export default EventCard;
