import PowerIcon from "@mui/icons-material/Power";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import DeckIcon from "@mui/icons-material/Deck";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PoolIcon from "@mui/icons-material/Pool";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Typography from "@mui/material/Typography";

function Pictograms(props) {
  const { spot } = props;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {spot.outsideSeating && (
        <div style={{ width: "30vw" }}>
          <DeckIcon fontSize="large" />
          <Typography>Outside Seating</Typography>
        </div>
      )}

      {spot.hasSockets && (
        <div style={{ width: "30vw" }}>
          <PowerIcon fontSize="large" />
          <Typography>Offers sockets</Typography>
        </div>
      )}

      {spot.veganFriendly && (
        <div style={{ width: "30vw" }}>
          <LocalFloristIcon fontSize="large" />
          <Typography>Vegan options</Typography>
        </div>
      )}

      {spot.dateFriendly && (
        <div style={{ width: "30vw" }}>
          <VolunteerActivismIcon fontSize="large" />
          <Typography>Good for dates</Typography>
        </div>
      )}

      {spot.hasPool && (
        <div style={{ width: "30vw" }}>
          <PoolIcon fontSize="large" />
          <Typography>Has a pool</Typography>
        </div>
      )}

      {spot.coWorkingFriendly && (
        <div style={{ width: "30vw" }}>
          <WorkOutlineIcon fontSize="large" />
          <Typography>Coworking spot</Typography>
        </div>
      )}
    </div>
  );
}

export default Pictograms;
