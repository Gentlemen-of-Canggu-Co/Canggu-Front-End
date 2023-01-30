import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ConsumableCard(props) {
  const { spot } = props;
  return (
    <div>
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h2>What I ate @ {spot.name}</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {spot.consumables &&
              spot.consumables.map((singleConsumable) => {
                return (
                  <div key={singleConsumable._id}>
                    <Card sx={{ maxWidth: "100vw" }}>
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={singleConsumable.image}
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
                                {singleConsumable.name}
                              </Typography>
                              <Typography variant="body2">
                                {singleConsumable.tagline}
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
                              {singleConsumable.rating}
                            </p>
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
    </div>
  );
}

export default ConsumableCard;
