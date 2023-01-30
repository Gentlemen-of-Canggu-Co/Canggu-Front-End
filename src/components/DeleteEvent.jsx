import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";

function DeleteEvent(props) {
  const { eventId } = props;
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .delete(`${API_URL}/api/events/${eventId}`)
      .then(() => navigate("/events"));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSubmit}>Delete Event</Button>
    </div>
  );
}

export default DeleteEvent;
