import PowerIcon from "@mui/icons-material/Power";
import DeckIcon from "@mui/icons-material/Deck";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PoolIcon from "@mui/icons-material/Pool";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WifiIcon from '@mui/icons-material/Wifi';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Pictograms(props) {
  const { spot } = props;

  return ( <Typography>
    <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >

{spot.coWorkingFriendly && (
      <div style={{ width: "30vw" }}>
        <WorkOutlineIcon fontSize="large" />
        <Typography>Coworking</Typography>
      </div>
    )}  

    {spot.hasSockets && (
      <div style={{ width: "30vw" }}>
        <PowerIcon fontSize="large" />
        <Typography>Sockets</Typography>
      </div>
    )}

    {spot.veganFriendly && (
      <div style={{ width: "30vw" }}>
        <WifiIcon fontSize="large" />
        <Typography>{spot.wifiSpeed} mbps</Typography>
      </div>
    )}

    {spot.dateFriendly && (
      <div style={{ width: "30vw" }}>
        <VolunteerActivismIcon fontSize="large" />
        <Typography>Dates</Typography>
      </div>
    )}

    {spot.hasPool && (
      <div style={{ width: "30vw" }}>
        <PoolIcon fontSize="large" />
        <Typography>Pool</Typography>
      </div>
    )}

    {spot.outsideSeating && (
      <div style={{ width: "30vw" }}>
        <DeckIcon fontSize="large" />
        <Typography>Outdoor</Typography>
      </div>
    )}

  </div>
    </Typography>
  
  
  
  
  
  
  
  
  
//   <Accordion>
//     <AccordionSummary
//       expandIcon={<ExpandMoreIcon />}
//       aria-controls="panel1a-content"
//       id="panel1a-header"
//     >
//       <Typography>
//         <h2>Hard Facts</h2>
//       </Typography>
//     </AccordionSummary>
//     <AccordionDetails>
//       <Typography>
//       <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         flexDirection: "row",
//         justifyContent: "space-between",
//       }}
//     >

// {spot.coWorkingFriendly && (
//         <div style={{ width: "30vw" }}>
//           <WorkOutlineIcon fontSize="large" />
//           <Typography>Coworking</Typography>
//         </div>
//       )}  

//       {spot.hasSockets && (
//         <div style={{ width: "30vw" }}>
//           <PowerIcon fontSize="large" />
//           <Typography>Sockets</Typography>
//         </div>
//       )}

//       {spot.veganFriendly && (
//         <div style={{ width: "30vw" }}>
//           <WifiIcon fontSize="large" />
//           <Typography>{spot.wifiSpeed} mbps</Typography>
//         </div>
//       )}

//       {spot.dateFriendly && (
//         <div style={{ width: "30vw" }}>
//           <VolunteerActivismIcon fontSize="large" />
//           <Typography>Dates</Typography>
//         </div>
//       )}

//       {spot.hasPool && (
//         <div style={{ width: "30vw" }}>
//           <PoolIcon fontSize="large" />
//           <Typography>Pool</Typography>
//         </div>
//       )}

//       {spot.outsideSeating && (
//         <div style={{ width: "30vw" }}>
//           <DeckIcon fontSize="large" />
//           <Typography>Outdoor</Typography>
//         </div>
//       )}

//     </div>
//       </Typography>
//     </AccordionDetails>
//   </Accordion>




    
  );
}

export default Pictograms;
