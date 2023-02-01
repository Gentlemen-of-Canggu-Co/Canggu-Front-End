import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditEvent() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

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

  useEffect(() => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dya5f34qe",
        uploadPreset: "uw_test",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setEventImage(result.info.secure_url);
          console.log(result.info.secure_url)
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
    document.getElementById("upload_widget").addEventListener("click", (event) => {
      event.preventDefault()
    });
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const editedEvent = {
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
      ownerId: eventId,
    };

    axios.put(`${API_URL}/api/events/${eventId}`, editedEvent).then(() => {
      navigate("/events");
    });
  };

  useEffect(() => {
    axios.get(`${API_URL}/api/events/${eventId}`).then((response) => {
      setName(response.data.name);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setStartDate(response.data.startDate);
      setEndDate(response.data.endDate);
      setStartTime(response.data.startTime);
      setEndTime(response.data.endTime);
      setSignupRequired(response.data.signupRequired);
      setSignupLink(response.data.signupLink);
      setEventImage(response.data.eventImage);
    });
  }, [eventId]);

  return (
    <div>
      <div>
        <h3>Add new Event</h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
          <br />
          <label>Start Date: YYYY-MM-DD</label>
          <input
            type="string"
            name="startDate"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
          <br />
          <label>End Date: YYYY-MM-DD</label>
          <input
            type="string"
            name="endDate"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
          <br />
          <br />
          <label>Start Time: HH:MM</label>
          <input
            type="string"
            name="startTime"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
          <br />
          <label>End Time: HH:MM</label>
          <input
            type="string"
            name="endTime"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
          />
          <br />
          <label>Event image</label>
        <button id="upload_widget" className="cloudinary-button">
          Change
        </button>
          <br />
          <label>Do you need to sign up?</label>
          <input
            type="checkbox"
            name="signupRequired"
            value={signupRequired}
            onChange={(event) => setSignupRequired(event.target.value)}
          />
          <br />
          <label>Link to Signup</label>
          <input
            type="text"
            name="signupLink"
            value={signupLink}
            onChange={(event) => setSignupLink(event.target.value)}
          />
          <br />
       
          <button type="submit">Edit Event</button>
        </form>
      </div>
    </div>
  );
}

export default EditEvent;
