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
      <button type="button" className="btn btn-danger" onClick={handleSubmit}>Delete Spot</button>
    </div>
  );
}

export default DeleteSpot;
