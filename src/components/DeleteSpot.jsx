import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";

function DeleteSpot(props) {
  const { spotId } = props;
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .delete(`${API_URL}/api/spots/${spotId}`)
      .then(() => navigate("/spots"));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSubmit}>Delete Spot</Button>
    </div>
  );
}

export default DeleteSpot;
