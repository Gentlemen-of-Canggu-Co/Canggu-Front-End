import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function AddEvent() {
  const { spotId } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [signupRequired, setSignupRequired] = useState(false);
  const [signupLink, setSignupLink] = useState("No signup required.");
  const [eventImage, setEventImage] = useState("");
  const ownerId = spotId;
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  
  useEffect(() => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dya5f34qe",
        uploadPreset: "uw_test",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setEventImage(result.info.secure_url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name,
      description,
      price,
      startDate,
      endDate,
      startTime,
      endTime,
      signupRequired,
      signupLink,
      eventImage,
      ownerId,
    };
    axios.post(`${API_URL}/api/events`, newEvent).then(() => {
      navigate(`/events`);
    });
  };
  return (
    <div>
      <h3>Add new Event</h3>

      <form onSubmit={handleSubmit}>
    <div className="mb-3">
  <label className="form-label">Name:</label>
  <input type="text" className="form-control" onChange={(event) => setName(event.target.value)}/>
    </div>
    <div className="mb-3">
  <label className="form-label">Description:</label>
  <input type="text" className="form-control" onChange={(event) => setDescription(event.target.value)}/>
    </div>
    <div className="mb-3">
  <label className="form-label">Price:</label>
  <input type="number" className="form-control" onChange={(event) => setPrice(event.target.value)}/>
    </div>
    <div className="mb-3">
  <label className="form-label">Start Date: YYYY-MM-DD</label>
  <input type="text" className="form-control" onChange={(event) => setStartDate(event.target.value)}/>
    </div>
    <div className="mb-3">
  <label className="form-label">End Date: YYYY-MM-DD</label>
  <input type="text" className="form-control" onChange={(event) => setEndDate(event.target.value)}/>
    </div>
    <div className="mb-3">
  <label className="form-label">Start Time: HH:MM</label>
  <input type="text" className="form-control" onChange={(event) => setStartTime(event.target.value)}/>
    </div>
    <div className="mb-3">
  <label className="form-label">End Time: HH:MM</label>
  <input type="text" className="form-control" onChange={(event) => setEndTime(event.target.value)}/>
    </div>
    <div className="mb-3">
    <label className="form-label">Event Image: </label>
    <button id="upload_widget" className="cloudinary-button" style={{backgroundColor: "green"}}>
          Upload
        </button>
    </div>
    <div className="form-check">
  <input type="checkbox" className="form-check-input" onChange={(event) => setSignupRequired(event.target.checked)}/>
  <label className="form-check-label">Do you need to sign up?</label>
    </div>
    <div className="mb-3">
  <label className="form-label">Link to Signup</label>
  <input type="text" className="form-control" onChange={(event) => setSignupLink(event.target.value)}/>
    </div>
    <button type="submit" className="btn btn-success">Add Event</button>
    </form>
    </div>
  );
}
export default AddEvent;
