import {Link} from 'react-router-dom';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddConsumable from './AddConsumable';
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import "../SpotList/spotlist.css"


function ConsumableCard(props) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  const { spot, spotId, getSpot } = props;
  return (
    <div>
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={'div'} sx={{ fontFamily: 'Teko', fontSize: "40px" }}>
            <h2>What (not) to eat</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding: 0}}>
        <div className="spotlistCardWrap">
          {/* <Typography component={'div'}> */}
            {spot.consumables &&
              spot.consumables.map((singleConsumable) => {
                return (
                  <div key={singleConsumable._id}>
                  <Card className="cardSize">
                    {/* <Card sx={{ maxWidth: "100vw" }}> */}
                      <Box sx={{ position: "relative" }}>
                        <Link to={`/consumable/${singleConsumable._id}`}><CardMedia
                          sx={{ height: 220 }}
                          image={singleConsumable.image}
                          title="green iguana"
                        /></Link>

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
                              <Typography component={'div'} variant="h5">
                                {singleConsumable.name}
                              </Typography>
                              <Typography component={'div'} variant="body2">
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
          {/* </Typography> */}
          </div>

         {isLoggedIn && <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={'div'}>
          <h3 className="consumable">Add New Consumable</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddConsumable spotId={spotId} getSpot={getSpot}/>
          </AccordionDetails>
          </Accordion>}
        </AccordionDetails>
      </Accordion>
    </div> 
  );
}

export default ConsumableCard;
