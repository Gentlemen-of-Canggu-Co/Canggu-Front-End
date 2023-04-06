import PowerIcon from "@mui/icons-material/Power";
import DeckIcon from "@mui/icons-material/Deck";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PoolIcon from "@mui/icons-material/Pool";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WifiIcon from "@mui/icons-material/Wifi";
import Typography from "@mui/material/Typography";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import "../SpotList/spotlist.css"

function Pictograms(props) {
  const { spot } = props;

  return (
    <Typography component={'div'}>
      <div className="pictograms"
      >
        {spot.coWorkingFriendly && (
          <div className="singlePictogram">
            <WorkOutlineIcon fontSize="large" />
            <Typography>Coworking</Typography>
          </div>
        )}

        {spot.hasSockets && (
          <div className="singlePictogram">
            <PowerIcon fontSize="large" />
            <Typography>Sockets</Typography>
          </div>
        )}

        {spot.veganFriendly && (
          <div className="singlePictogram">
            <VolunteerActivismIcon fontSize="large" />
            <Typography>Vegan friendly</Typography>
          </div>
        )}

        {spot.dateFriendly && (
          <div className="singlePictogram">
            <VolunteerActivismIcon fontSize="large" />
            <Typography>Dates</Typography>
          </div>
        )}

        {spot.hasPool && (
          <div className="singlePictogram">
            <PoolIcon fontSize="large" />
            <Typography>Pool</Typography>
          </div>
        )}

        {spot.outsideSeating && (
          <div className="singlePictogram">
            <DeckIcon fontSize="large" />
            <Typography>Outdoor Seats</Typography>
          </div>
        )}

        {spot.wifiSpeed && (
          <div className="singlePictogram">
            <WifiIcon fontSize="large" />
            <Typography>{spot.wifiSpeed} mb/s</Typography>
          </div>
        )}

        {spot.locallyOwned && (
          <div className="singlePictogram">
            <Diversity1Icon fontSize="large" />
            <Typography>Locally Owned</Typography>
          </div>
        )}
      </div>
    </Typography>
  );
}

export default Pictograms;
