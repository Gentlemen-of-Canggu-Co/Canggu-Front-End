import PowerIcon from "@mui/icons-material/Power";
import DeckIcon from "@mui/icons-material/Deck";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PoolIcon from "@mui/icons-material/Pool";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WifiIcon from "@mui/icons-material/Wifi";
import Typography from "@mui/material/Typography";

function Pictograms(props) {
  const { spot } = props;

  return (
    <Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100vw",
          marginTop: "20px"
        }}
      >
        {spot.coWorkingFriendly && (
          <div style={{ width: "30vw", display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <WorkOutlineIcon fontSize="large" />
            <Typography>Coworking</Typography>
          </div>
        )}

        {spot.hasSockets && (
          <div style={{ width: "30vw", display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PowerIcon fontSize="large" />
            <Typography>Sockets</Typography>
          </div>
        )}

        {spot.veganFriendly && (
          <div style={{ width: "30vw", display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <WifiIcon fontSize="large" />
            <Typography>{spot.wifiSpeed} mb/s</Typography>
          </div>
        )}

        {spot.dateFriendly && (
          <div style={{ width: "30vw", display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <VolunteerActivismIcon fontSize="large" />
            <Typography>Dates</Typography>
          </div>
        )}

        {spot.hasPool && (
          <div style={{ width: "30vw", display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PoolIcon fontSize="large" />
            <Typography>Pool</Typography>
          </div>
        )}

        {spot.outsideSeating && (
          <div style={{ width: "30vw", display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <DeckIcon fontSize="large" />
            <Typography>Outdoor</Typography>
          </div>
        )}
      </div>
    </Typography>
  );
}

export default Pictograms;
